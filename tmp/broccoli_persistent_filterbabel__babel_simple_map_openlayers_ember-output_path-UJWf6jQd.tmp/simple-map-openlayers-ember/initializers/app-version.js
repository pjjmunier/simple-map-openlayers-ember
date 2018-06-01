define('simple-map-openlayers-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'simple-map-openlayers-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _simpleMapOpenlayersEmberConfigEnvironment) {
  var _config$APP = _simpleMapOpenlayersEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});