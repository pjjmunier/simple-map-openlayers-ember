"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('simple-map-openlayers-ember/helpers/app-version', ['exports', 'ember', 'simple-map-openlayers-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _simpleMapOpenlayersEmberConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _simpleMapOpenlayersEmberConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('simple-map-openlayers-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('simple-map-openlayers-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('simple-map-openlayers-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'simple-map-openlayers-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _simpleMapOpenlayersEmberConfigEnvironment) {
  var _config$APP = _simpleMapOpenlayersEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('simple-map-openlayers-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('simple-map-openlayers-ember/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('simple-map-openlayers-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('simple-map-openlayers-ember/initializers/export-application-global', ['exports', 'ember', 'simple-map-openlayers-ember/config/environment'], function (exports, _ember, _simpleMapOpenlayersEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_simpleMapOpenlayersEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _simpleMapOpenlayersEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_simpleMapOpenlayersEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('simple-map-openlayers-ember/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('simple-map-openlayers-ember/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('simple-map-openlayers-ember/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("simple-map-openlayers-ember/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('simple-map-openlayers-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('simple-map-openlayers-ember/routes/map-openlayers', ['exports', 'ember', 'npm:openlayers', 'npm:geoportal-extensions-openlayers'], function (exports, _ember, _npmOpenlayers, _npmGeoportalExtensionsOpenlayers) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            var createMap = function createMap() {
                var map = new _npmOpenlayers['default'].Map({
                    target: "map",
                    layers: [new _npmOpenlayers['default'].layer.GeoportalWMTS({
                        layer: "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                    })],
                    view: new _npmOpenlayers['default'].View({
                        center: [288074.8449901076, 6247982.515792289],
                        zoom: 8
                    })
                });
                var mouse = new _npmOpenlayers['default'].control.GeoportalMousePosition();
                map.addControl(mouse);
            };

            _npmGeoportalExtensionsOpenlayers['default'].Services.getConfig({
                apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                timeOut: 20000,
                onSuccess: createMap
            });
        }
    });
});
define('simple-map-openlayers-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("simple-map-openlayers-ember/templates/map-openlayers", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "simple-map-openlayers-ember/templates/map-openlayers.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Map OpenLayers");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "map");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('simple-map-openlayers-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'simple-map-openlayers-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("simple-map-openlayers-ember/app")["default"].create({"name":"simple-map-openlayers-ember","version":"0.0.0+3de6bd44"});
}

/* jshint ignore:end */
//# sourceMappingURL=simple-map-openlayers-ember.map
