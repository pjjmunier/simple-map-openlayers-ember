define('simple-map-openlayers-ember/app', ['exports', 'ember', 'simple-map-openlayers-ember/resolver', 'ember-load-initializers', 'simple-map-openlayers-ember/config/environment'], function (exports, _ember, _simpleMapOpenlayersEmberResolver, _emberLoadInitializers, _simpleMapOpenlayersEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _simpleMapOpenlayersEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _simpleMapOpenlayersEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});