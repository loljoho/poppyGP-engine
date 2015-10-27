poppyGP-engine
==============

Vroom vroom!  

__Work in progress.__

> Pass the power tools, please.
> 
> Which one(s)?
> 
> All of them.




Overview
--------

__poppyGP-engine__ provides a data access layer for the __poppyGP-player__ front-end web application.

Its role resembles that of a REST API, and will serve as the back-end for a number of features, as outlined in the eponymous section (appropriately titled "Features").

Development of the project with the LAMP stack:

 * Linux (Ubuntu or Amazon Linux?)
 * PHP 5.6
 * MySQL 5.7
 * Apache 2.4

The list below outlines the technologies to be utilised:

 * [Slim Framework 3](http://www.slimframework.com/) - lightweight PHP micro framework
 * [Composer](https://getcomposer.org/) - dependency managemer
 * [Doctrine Project](http://www.doctrine-project.org/) - multifunctional PHP library and ORM




Technologies
------------

### Slim Framework ###

While Slim Framework 3 is still in the pre-release stages, this project will follow along the framework's development to promote current coding standards and conventions.  In addition, the development of this project may prove useful to contributing towards the Slim Framework development process as well.

 * [Slim Framework 3 Documentation](http://www.slimframework.com/docs/)
 * [Slim Framework 3 RC1 Announcement](http://www.slimframework.com/2015/09/08/slim3-rc1.html)
 * [slimphp/Slim 3.0.0-RC1 Source](https://github.com/slimphp/Slim/tree/3.0.0-RC1)



### Composer ###

 * [Composer Documentation](https://getcomposer.org/doc/)
 * [Packagist](https://packagist.org/)




Features (Incomplete!)
----------------------

### poppyGP Schedule ###

Responds with `JSON` schedule data to `GET` requests from the webapp.


__Request Handling__

 * __Default Behaviour__ - return data includes array of `track` objects:
   * Current Track
   * Previous Tracks (default 1)
   * Next Tracks (default 3)
 * __Paging__ - modify number of past and/or future tracks (will still return other default behaviour objects)?
   * `api/schedule?prev=10` retrieves past 10 tracks, as well as current track and next three tracks
   * `api/schedule?next=10` retrieves next 10 tracks, as well as current track and past track
 * __Offset__ - offset the results; only available for upcoming tracks:
   * `api/schedule?next=10&offset=20` retrieves next 10 tracks, offset by 20


__Response `track` array element__

|  Key           | Data Type   | Description                                                         |
| :------------- | :---------- | :------------------------------------------------------------------ |
| `title`        | String      | Track title to display                                              |
| `duration`     | Number, int | Track duration (ms) for [Moment.js](http://momentjs.com/)           |
| `playtime`     | String      | Scheduled play time of track; ISO 8601 `YYYY-MM-DD HH:mm:ss ±hh:mm` |
| `countryCode`  | String      | Race country code; ISO 3166-1 alpha-2                               |
| `season`       | Number, int | Race season; four-digit year `YYYY` 1950+                           |



### Twitter API Interaction ###

Interacts with the [Twitter API](https://dev.twitter.com/overview/documentation) via OAuth2 using [application-only authentication](https://dev.twitter.com/oauth/application-only)



### User Authentication ###

Interacts with the [Reddit API](https://www.reddit.com/dev/api) via OAuth2 using an [application registered with Reddit](https://github.com/reddit/reddit/wiki/OAuth2)




Reference & Miscellany
----------------------

__Slim Applications__

 * https://github.com/juliangut/slim-doctrine
 * https://github.com/akrabat/slim3-skeleton
 * https://github.com/seb-bizeul/slim3-starter-kit
 * https://github.com/rotexsoft/slim3-skeleton-mvc-app
 * https://github.com/shameerc/slim-skeleton
 * https://github.com/search?l=PHP&o=desc&q=slim+3&s=updated&type=Repositories&utf8=%E2%9C%93

__Slim API-Specific__
 
 * https://github.com/progknife/slim3-rest
 * https://github.com/RichardStyles/RestAPI
 * https://github.com/MichielvdVelde/php-blog-api
 * https://github.com/akrabat/slim3-api-output-format