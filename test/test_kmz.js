var gtran = require('../src/script.js');
var fs = require('fs');
var logger = require('log4js').getLogger();

var chai = require('chai');
var expect = chai.expect;

describe('KMZ module', function() {

    var saveName = 'test/result/test.kmz';

    var geojson = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {"type":"Point","coordinates":[-70.2532459795475,43.6399758607149]},
            'properties': { 'id': 1 }
        }]
    };

    it('should save the geojson as a KMZ file with promise.', function() {
        gtran.setPromiseLib(require('promise'));
        gtran.fromGeoJson(geojson, saveName).then(function(file) {
            expect(file).to.be.equal(saveName);

            // if(fs.statSync(saveName)) { fs.unlinkSync(saveName); }
        })
        .catch(function(err) {
            logger.error(err);
        });
    });
});
