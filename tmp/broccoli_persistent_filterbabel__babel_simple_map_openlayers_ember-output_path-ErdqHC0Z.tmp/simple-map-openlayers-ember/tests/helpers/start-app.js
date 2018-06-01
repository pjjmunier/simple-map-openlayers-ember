define('simple-map-openlayers-ember/tests/helpers/start-app', ['exports', 'ember', 'simple-map-openlayers-ember/app', 'simple-map-openlayers-ember/config/environment'], function (exports, _ember, _simpleMapOpenlayersEmberApp, _simpleMapOpenlayersEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _simpleMapOpenlayersEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _simpleMapOpenlayersEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});