<?php




// ------------------------------
//  Static file requests on dev server
// ------------------------------

if (PHP_SAPI == 'cli-server') {
    $file = __DIR__ . $_SERVER['REQUEST_URI'];
    if (is_file($file)) {
        return false;
    }
}

// ------------------------------




// ------------------------------
//  Autoloader
// ------------------------------

require __DIR__ . '/../vendor/autoload.php';

session_start();

// ------------------------------




// ------------------------------
//  Instantiate application
// ------------------------------

$settings = require __DIR__ . '/../app/settings.php';

$app = new \Slim\App($settings);

// ------------------------------




// ------------------------------
//  Require configuration files
// ------------------------------

// Set up dependencies
require __DIR__ . '/../app/dependencies.php';

// Register middleware
require __DIR__ . '/../app/middleware.php';

// Register routes
require __DIR__ . '/../app/routes.php';

// ------------------------------




// ------------------------------
//  Vroom vroom!
// ------------------------------

$app->run();

// ------------------------------