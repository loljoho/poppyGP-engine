/* Convert .xspf Playlist
*/

// Load Dependencies
// ------------------------------
// https://nodejs.org/api/events.html#events_class_events_eventemitter
// https://github.com/assistunion/xml-stream
// https://nodejs.org/api/util.html

var EventEmitter  = require('events').EventEmitter,
    XmlStream     = require('xml-stream'),
    util          = require('util');


// Function Definition
// ------------------------------

var Xspf = function (stream) {

  // Pass fs to local var `xml`
  this.xml = new XmlStream(stream);

  // call parse method
  this.parse();

};

// create module exports
module.exports = Xspf;

// inherit prototype methods
util.inherits(Xspf, EventEmitter);


// prototype parser
Xspf.prototype.parse = function () {
  var self = this;

  this.xml.on('endElement: track', function (track) {
    self.emit('track', track);
  });

};