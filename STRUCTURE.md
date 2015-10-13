Application Structures
======================

### Intermediary Structure ###

```
├── api/
│   ├── common/
│   │   ├── common.config.js
│   │   ├── common.services.js
│   │   └── common.utils.js
│   ├── core/
│   │   ├── core.config.js
│   │   ├── core.controllers.js
│   │   ├── core.models.js
│   │   ├── core.policies.js
│   │   ├── core.routes.js
│   │   ├── core.services.js
│   │   └── core.utils.js
│   └── api.js
├── config/
│   ├── express.js
│   └── config.js
├── data/
│   ├── playlist.xspf
│   └── sample.xspf
├── docs/
│   ├── 
│   └── 
├── tests/
├── gulpfile.js
└── index.js
```

### Final Structure ###


```
├── api/
│   ├── common/
│   │   ├── config/
│   │   ├── services/
│   │   └── utils/
│   ├── core/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── policies/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── api.js
├── config/                             --> Configuration Files
│   ├── env/                            --> Environment
│   │   ├── index.js
│   │   ├── development.js
│   │   ├── production.js
│   │   └── test.js
│   ├── auth.js                         --> Authentication
│   ├── config.js                       --> General
│   ├── database.js                     --> Database
│   ├── express.js                      --> Express
│   └── index.js                        --> Index
├── gulp/
│   ├── conf.js
│   ├── build.js
│   ├── server.js
│   ├── scripts.js
│   ├── tests.js
│   ├── watch.js
│   └── utils.js
├── logs/
├── scripts/
│   ├── 
│   │   ├── 
│   │   └──
│   ├── 
│   └── 
├── tests/
│   ├── 
│   └── 
├── gulpfile.js
├── index.js
└──
```

Links & Resources
-----------------
 - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
 - https://scotch.io/bar-talk/designing-a-restful-web-api
 - http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
 - http://madhatted.com/2013/3/19/suggested-rest-api-practices
 - https://github.com/swagger-api/swagger-node
 - http://apigee.com/about/blog/developer/building-nodejs-apis-swagger
 - http://steve-jansen.github.io/blog/2013/08/22/wiring-together-passport-swagger-express/
