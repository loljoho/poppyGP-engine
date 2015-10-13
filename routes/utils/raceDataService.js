/**
 * ------------------------------
 *  Race Data Service
 * ------------------------------
 * @filename  raceDataService.js
 * @location  /routes/utils/
 * @author    Jonathan Ho <joho@joho.io>
 */

'use strict';

module.exports = function() {

  var service = {
    extractTrackInfo  : extractTrackInfo,
  };

  return service;


  /**
   * ------------------------------
   *  Extract Track Information
   * ------------------------------
   *
   * @name    extractTrackInfo
   *
   * @desc    Extracts information from track item entry
   *
   * @param   {Object}  item
   *          {string}  item.location   Location string
   *          {number}  item.duration   Duration (ms)
   *          {string}  item.title      Metatag title (if defined)
   *
   * @returns {Object}  track
   *          {string}  track.title     Display Title
   *          {number}  track.duration  Duration (ms)
   *          {string}  track.datetime  Scheduled Play Time (ISO 8601)
   *          {string}  track.type      Type (race, qual, highlights, etc)
   *          {number}  track.season    Year (1950+)
   *          {number}  track.round     Round Number (1-20)
   *
   */
  function extractTrackInfo(track) {

    //  Load Modules
    // ------------------------------


    //  Initialisation
    // ------------------------------

    var info = {};



    //  Return
    // ------------------------------

    return info;

  }


};










// ------------------------------
