Project Structure
=================

Proposed project directory & file structure.

For the actual application structure, refer to the [Application Structure](APP-STRUCTURE.md) documentation file.




Project Structure
-----------------

```
├── api/                                --> Public directory served as `/`
│   ├── css/
│   └── index.php
├── app/                                --> Slim application directory
│   ├── src/
│   │   ├── Action/
│   │   │   ├── HomeAction.php
│   │   │   └── 
│   │   ├── Middleware/
│   │   │   ├── Authenticate.php
│   │   │   └── JsonResponse.php
│   │   ├── 
│   │   └── 
│   ├── templates/
│   │   └── home.twig
│   ├── dependencies.php
│   ├── middleware.php
│   ├── routes.php
│   └── settings.php
├── bin/                                --> Shell scripts & utilities
│   ├── 
│   ├── serve.sh
│   ├── 
│   └── 
├── docs/                               --> Application documentation
├── cache/
│   ├── 
│   └── 
├── log/
│   └── app.log
├── tests/
├── vendor/
│   ├── ...
│   └── autoload.php
├── composer.json
├── serve.sh
├── ...
└── README.md
```
