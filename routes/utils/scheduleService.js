/**
 * ------------------------------
 *  Schedule Service
 * ------------------------------
 * @filename  scheduleService.js
 * @location  /routes/utils/
 * @author    Jonathan Ho <joho@joho.io>
 */

'use strict';

module.exports = function() {

  var service = {
    getSchedule : getSchedule
  };
  return service;









  // ------------------------------
  //  Get Schedule Function
  // ------------------------------

  function getSchedule(playlist, startTime) {

    var fs        = require('fs');
    var schedule  = [];

    var moment    = require('moment');
    var startTime = moment(startTime);    // Schedule Start
    var pointer   = moment(startTime);    // Pointer








    // ------------------------------
    //  Regular Expressions
    // ------------------------------

    var regex = {
      round   : "([01]\d|[12]\d|\d)",
      season  : "(19[56789]\d|20[01]\d)"
    };








    // ------------------------------
    //  Begin For Loop
    // ------------------------------

    for(var i = 0; i < playlist.length; i++) {

      var track = {};








      // ------------------------------
      //  Location Field Handler
      // ------------------------------
      var filepath = playlist[i].location



    }

    // ------------------------------








  // ------------------------------
  //  Extract Filename
  // ------------------------------

  function parseLocation(location) {



  }

  // ------------------------------








  }









  // ------------------------------
  //  Validate Season
  // ------------------------------

  function validateSeason(season) {
    if(season >= 1950 && season < 2020) {
      return true;
    } else {
      return false;
    }
  }

  // ------------------------------




  // ------------------------------
  //  Validate Round
  // ------------------------------

  function validateRound(round) {
    if(round > 0 && round < 20) {
      return true;
    } else {
      return false;
    }
  }

  // ------------------------------


};

    //  Track Information
    // ------------------------------
    //
    // Display Title (string)
    // track.title                     = "2015 Japanese Grand Prix";
    //
    // Track Duration (ms)
    // track.duration                  = 8626840;
    //
    // Scheduled Datetime (ISO 8601)
    // track.datetime                  = "2015-10-12T16:00:00Z-05:00";
    //
    // Track Type (race, highlights, quali, practice, other)
    // track.type                      = "race";
    //
    //
    //  Race Details
    // ------------------------------
    //
    // track.race.name                 = "Japanese Grand Prix";
    // track.race.season               = 2014;
    // track.race.round                = 15;
    // track.race.date                 = "2014-10-05";
    //
    //
    //  Race Circuit Details
    // ------------------------------
    //
    // Name & Wiki URL
    // track.race.circuit.name         = "Suzuka Circuit";
    // track.race.circuit.link         = "http:\/\/en.wikipedia.org\/wiki\/Suzuka_Circuit";
    //
    //
    //  Race Location Details
    // ------------------------------
    //
    // track.race.location.locality    = "Suzuka";
    // track.race.location.country     = "Japan";
    // track.race.location.countryCode = "jp";
    //
    // track.race.location.lat         = 34.8431;
    // track.race.location.lon         = 136.541;
