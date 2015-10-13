## Links & Resources ##

 - [Using Express middleware](http://expressjs.com/guide/using-middleware.html)
 - [How to Write Middleware for Express.js Apps](https://stormpath.com/blog/how-to-write-middleware-for-express-apps/)

 - http://ergast.com/mrd/
 - http://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express
 - http://www.sitepoint.com/making-http-requests-in-node-js/








### Playlist File Track Values ###

Below is the original `xml`-style DOM content for `xspf` playlist tracks, from which the parser will read.

```xml
<track>
  <location>file:///F:/Videos/Formula%201/2014/Formula1.2014.Round15.Japan.Race.ONE.Web-Rip.x264-Nub.mp4</location>
  <duration>8626840</duration>
  <extension application="http://www.videolan.org/vlc/playlist/0">
    <vlc:id>0</vlc:id>
  </extension>
</track>
```








### GET Requests ###

Additional race information is retrieved from the Ergast Developer API using data extracted from the `xspf` playlist track object.

Ergast API calls can be made several ways based on the data that was able to be extracted.

 - __Season, Round__ - `http://ergast.com/api/f1/:season/:round/races.json?limit=1`
 - __Season, Circuit__ - `http://ergast.com/api/f1/:season/circuits/:circuitName/races.json?limit=1`








### Parsing Logic ###

Below is pseudocode with which the middleware will parse `xspf` playlist files.  Sample data is included.


#### I. Retrieve `playlist.xspf` contents ####

```js
var xspf = xspfFileService.getXspfFromFile(filepath);
```

__Example__

```
<trackList>
  <track>
    <location>file:///F:/Videos/Formula%201/2014/Formula1.2014.Round15.Japan.Race.ONE.Web-Rip.x264-Nub.mp4</location>
    <title>F1 2014 R15 Japan</title>
    <duration>8626840</duration>
    <extension application="http://www.videolan.org/vlc/playlist/0">
      <vlc:id>0</vlc:id>
    </extension>
  </track>
  <track>
    <location>file:///E:/Videos/Formula%201/2009/15%20Japan/Qualifying.mkv</location>
    <duration>9601065</duration>
    <extension application="http://www.videolan.org/vlc/playlist/0">
      <vlc:id>1</vlc:id>
    </extension>
  </track>
</trackList>
```


#### II. Parse XML to JSON ####

 - https://github.com/assistunion/xml-stream
 - https://github.com/node-xmpp/node-expat
 - https://github.com/Leonidas-from-XIV/node-xml2js

For each `<track>` in `<trackList>`, parse as below.


__`<location>`__
```
/**
 * Parses `location` element in `xspf` playlist
 *
 * @arg location  str   
 * @var racedata  array Array of filepath items e.g. ['2014']
 * @var filename  str   Name of file without extension
 */
function parseLocation(location) {
  // Decode URI
  var location = decodeURIComponent(location);

  // Remove file:///X:/ prefix & convert to array
  var filepath = location.slice(11).split('\/');

  // Extract filename and remove file extension
  var filename = filepath.pop().toString().slice(0,-4);

  // Remove first two directories from filepath
  var racedata = filepath.slice(2);
}
```






### Final Response Object Values ###

Below is the JSON-encoded pseudocode response for schedule items after the `xspf` playlist is parsed.

__For `track` object in array `trackList`__:

```js
//  Track Information
// ------------------------------

// Display Title (string)
track.title                     = "2015 Japanese Grand Prix";

// Track Duration (ms)
track.duration                  = 8626840;

// Scheduled Datetime (ISO 8601)
track.datetime                  = "2015-10-12T16:00:00Z-05:00";

// Track Type (race, highlights, quali, practice, other)
track.type                      = "race";


//  Race Details
// ------------------------------

track.race.name                 = "Japanese Grand Prix";
track.race.season               = 2014;
track.race.round                = 15;
track.race.date                 = "2014-10-05";


//  Race Circuit Details
// ------------------------------

// Name & Wiki URL
track.race.circuit.name         = "Suzuka Circuit";
track.race.circuit.link         = "http:\/\/en.wikipedia.org\/wiki\/Suzuka_Circuit";


//  Race Location Details
// ------------------------------

track.race.location.locality    = "Suzuka";
track.race.location.country     = "Japan";
track.race.location.countryCode = "jp";

track.race.location.lat         = 34.8431;
track.race.location.lon         = 136.541;
```
