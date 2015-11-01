<?php
namespace App\Action;

use Slim\Views\Twig;
use Psr\Log\LoggerInterface;

final class HomeAction
{
    private $view;
    private $logger;

    public function __construct(Twig $view, LoggerInterface $logger)
    {
        $this->view = $view;
        $this->logger = $logger;
    }

    public function dispatch($request, $response, $args)
    {
        $this->logger->info("Home page action dispatched");

        $this->view->render($response, 'home.twig');
        return $response;
    }

    public function login($request, $response, $args){
      $this->logger->info("Login Request");
      $rsp = array(
        'success'=>true,
        'message'=>"Log in request"
      );
      $response = $response->withJson($rsp);
      return $response;
    }
    public function logout($request, $response, $args){
      $this->logger->info("Logout Request");
      $rsp = array(
        'success'=>true,
        'message'=>"Logout request"
      );
      $response = $response->withJson($rsp);
      return $response;
    }

    public function setDefault($request, $response, $args){
      $this->logger->info("Default Request");
      $rsp = array(
        'success'=>true,
        'message'=>"Default request"
      );
      $response = $response->withJson($rsp);
      return $response;
    }
}
