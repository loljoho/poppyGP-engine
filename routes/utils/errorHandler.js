/**
 * ------------------------------
 *  Error Handler
 * ------------------------------
 * @filename  errorHandler.js
 * @location  /routes/utils/
 * @author    John Papa
 * @modified  Jonathan Ho <joho@joho.io>
 */

'use strict';

module.exports = function() {

  var service = {
    init      : init,
    logErrors : logErrors
  };

  return service;


  function init(err, req, res, next) {
    var status = err.statusCode || 500;
    if(err.message) {
      res.send(status, err.message);
    }
    else {
      res.send(status, err);
    }
    next();
  }


  function logErrors(err, req, res, next) {
    var status = err.statusCode || 500;
    console.error(status + ' ' + (err.message ? err.message : err));
    if(err.stack) {
      console.error(err.stack);
    }
    next(err);
  }

};
