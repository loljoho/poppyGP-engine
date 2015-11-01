<?php
// Routes
use \App\Middleware\JsonResponse;
use \App\Middleware\Authenticate;

$app->get('/', 'App\Action\HomeAction:dispatch')
        ->setName('homepage');

/**
*     START USER GROUP
*/
$app->group('/users', function () {
    // RUN login function from HomeAction Class
    $this->get('/login', 'App\Action\HomeAction:login')
        ->setName('login');

    $this->get('/logout', 'App\Action\HomeAction:logout')
        ->setName('logout')
        ->add(new JsonResponse())
        ->add(new Authenticate());

    $this->get('/', 'App\Action\HomeAction:setDefault')
        ->setName('')
        ->add(new JsonResponse());
});

// end: app/routes.php
?>
