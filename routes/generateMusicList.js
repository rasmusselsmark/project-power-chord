var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  fs.readdir('routes/Audio', function (err, files) {
    if (err) {
      console.log(err)
      return
    }

    files.forEach(function (file) {
      let tracks = []
      let trackData = {
        name: file,
        path: 'routes/Audio/' + file
      }

      tracks.push(trackData)
    });
    return tracks;
  })
});

module.exports = router;
