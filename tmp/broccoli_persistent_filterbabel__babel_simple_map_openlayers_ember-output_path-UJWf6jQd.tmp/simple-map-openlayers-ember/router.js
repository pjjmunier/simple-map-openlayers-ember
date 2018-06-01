define('simple-map-openlayers-ember/router', ['exports', 'ember', 'simple-map-openlayers-ember/config/environment'], function (exports, _ember, _simpleMapOpenlayersEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _simpleMapOpenlayersEmberConfigEnvironment['default'].locationType,
    rootURL: _simpleMapOpenlayersEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('map-openlayers');
  });

  exports['default'] = Router;
});