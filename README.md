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
<a id="overview"></a>

__poppyGP-engine__ provides a data access layer for the __poppyGP-player__ front-end web application.  Its role resembles that of a REST API.

The project will serve to provide a number of features as outlined in the section appropriately titled [Features](#features).

Development of the project with the LAMP stack:

 * Linux (Ubuntu or Amazon Linux?)
 * PHP 5.6
 * MySQL 5.7
 * Apache 2.4

More information can be found in the [Technologies](#tech) section.




Technologies
------------
<a id="tech"></a>

Numerous technologies are utilised in this project, amongst which are PHP frameworks and libraries, development tools, and a variety of mish-mash (for lack of a better term).


__[Slim Framework 3](http://www.slimframework.com/)__ lightweight PHP micro-framework

The third version is currently in `RC1` stage.  Hopefully, __poppyGP-engine__ development will provide useful in contributions towards the development of Slim Framework.


__[Composer](https://getcomposer.org/)__ - PHP dependency managemer


I intend on expanding upon this section as more technologies are implemented.




Features
--------
<a id="features"></a>

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




Credits & Thanks
----------------
<a id="credits"></a>


 * [shameerc/slim-skeleton](https://github.com/shameerc/slim-skeleton)
 * [RichardStyles/RestAPI](https://github.com/RichardStyles/RestAPI)
 * [akrabat/slim3-skeleton](https://github.com/akrabat/slim3-skeleton)




Reference & Miscellany
----------------------
<a id="ref"></a>


__Slim Applications__

 

__Slim API-Specific__
 
 * 

 * 
