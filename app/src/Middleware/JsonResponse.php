<?php

namespace App\Middleware;

use Slim\Http\Response;
use Slim\Http\Body;


/**
*   Middleware to set correct header for JSON output.
*   Very basic initial version, simply checks the body of the response to see if it is valid JSON.
*   If response is not JSON then continues with default settings.
*   If response is JSON then header is updated.
*
*   @author Richard Styles
*/
class JsonResponse
{
    /**
    * Invoke middleware
    *
    * @param  RequestInterface  $request  PSR7 request object
    * @param  ResponseInterface $response PSR7 response object
    * @param  callable          $next     Next middleware callable
    *
    * @return ResponseInterface PSR7 response object
    */
    public function __invoke($request, $response, $next)
    {
      /**
      *   Only want to process JSON response on outbound Middleware
      */
      $response = $next($request, $response);
      /**
      *   interrogate Body of response to see if valid JSON
      */
      $headers = $response->getHeaders();
      $body = $response->getBody();
      // IF body not JSON then return original response
      if(empty(json_decode($body))) return $response;


      /**
      * reset response/body to response to prepend with while(1); to json
      *   SEE:
      *   @link http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
      */
      $response = $response->withBody(
       new Body(fopen('php://temp', 'r+'))
      );
      // re-write body with prefaced while(1);
      $response->write('while(1);'.$body);
      // reset header
      $response = $response->withAddedHeader('Content-Type','application/json');
      return $response;
    }
}
?>
