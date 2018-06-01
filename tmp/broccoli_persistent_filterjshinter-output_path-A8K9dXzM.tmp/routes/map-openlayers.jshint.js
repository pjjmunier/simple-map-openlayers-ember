QUnit.module('JSHint | routes/map-openlayers.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/map-openlayers.js should pass jshint.\nroutes/map-openlayers.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 7, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
