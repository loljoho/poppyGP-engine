/**
 * ------------------------------
 *  Routes Index
 * ------------------------------
 * @filename  index.js
 * @location  /routes/
 * @author    Jonathan Ho <joho@joho.io>
 */

module.exports = function(app) {

  var playlistService = require('./utils/playlistService')();

  app.get('/api/playlist', getPlaylist);

  function getPlaylist(req, res, next) {

    var json = playlistService.getPlaylist();

    res.send(json);

  }
};
