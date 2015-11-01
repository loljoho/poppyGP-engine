<?php
/**
*   Basic authentication Middleware
*
*   @author Richard Styles
*/
namespace App\Middleware;


class Authenticate
{
    private $isValid;
    public function __invoke($request, $response, $next)
    {
      $this->isValid = true;
      /**
      *   Only continue into api if user is valid
      */
      if($this->isValid === true) $response = $next($request, $response);


      return $response;
    }
}

// end: app/src/Middleware/Authenticate.php
?>
