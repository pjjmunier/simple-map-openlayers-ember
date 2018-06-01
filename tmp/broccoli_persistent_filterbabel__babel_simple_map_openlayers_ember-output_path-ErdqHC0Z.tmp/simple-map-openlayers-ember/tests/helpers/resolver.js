define('simple-map-openlayers-ember/tests/helpers/resolver', ['exports', 'simple-map-openlayers-ember/resolver', 'simple-map-openlayers-ember/config/environment'], function (exports, _simpleMapOpenlayersEmberResolver, _simpleMapOpenlayersEmberConfigEnvironment) {

  var resolver = _simpleMapOpenlayersEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});