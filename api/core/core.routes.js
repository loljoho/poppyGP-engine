/**
 * ------------------------------
 *  Routes Index
 * ------------------------------
 * @filename  index.js
 * @location  /routes/
 * @author    Jonathan Ho <joho@joho.io>
 */

module.exports = function(app) {

  var playlistService = require('../common/playlistService')();


  app.get('/api/playlist', getPlaylist);

  function getPlaylist(req, res, next) {
    var json = playlistService.getPlaylist();
    res.send(json);
  }



  app.get('/api/schedule', getSchedule);

  function getSchedule(req, res, next) {
    var startTime = '2015-10-17T22:00:00Z-05:00';
    var playlist  = playlistService.getPlaylist();
    var schedule  = scheduleService.getSchedule(playlist, startTime);
  }

};
