/**
 * ------------------------------
 *  Playlist Service
 * ------------------------------
 * @filename  playlistService.js
 * @location  /routes/utils/
 * @author    Jonathan Ho <joho@joho.io>
 */

'use strict';

module.exports = function() {

  var service = {
    getPlaylist : getPlaylist
  };
  return service;

  function getPlaylist() {
    var fs      = require('fs');
    var path    = require('path');
    var xml2js  = require('xml2js');

    return getConfig('playlist.xspf');




    function readXspfFileSync(filepath, options) {
      var parser  = new xml2js.Parser(options);

      var data = parser.addListener('end', function(result) {
        return result;
      });

      var file = fs.readFileSync(filepath, 'utf8');
      parser.parseString(file);

      return data.resultObject.trackList.track;

    }




    function getConfig(filename) {
      var filepath = path.join('data/', filename);

      var valueProcessor = function(value) {
        if(isNaN(value) && value.substring(0, 4) === 'file') {
          return decodeURIComponent(value).slice(11).split('\/').slice(2).toString().slice(0,-4);
        } else {
          return value;
        }
      };

      var options = {
        explicitArray: false,
        explicitRoot: false,
        ignoreAttrs: true,
        valueProcessors: [
          valueProcessor
        ]
      };

      return readXspfFileSync(filepath, options);

    }

  }

};
