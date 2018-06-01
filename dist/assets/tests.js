'use strict';

define('simple-map-openlayers-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('simple-map-openlayers-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('simple-map-openlayers-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('simple-map-openlayers-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'simple-map-openlayers-ember/tests/helpers/start-app', 'simple-map-openlayers-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _simpleMapOpenlayersEmberTestsHelpersStartApp, _simpleMapOpenlayersEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _simpleMapOpenlayersEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _simpleMapOpenlayersEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('simple-map-openlayers-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('simple-map-openlayers-ember/tests/helpers/resolver', ['exports', 'simple-map-openlayers-ember/resolver', 'simple-map-openlayers-ember/config/environment'], function (exports, _simpleMapOpenlayersEmberResolver, _simpleMapOpenlayersEmberConfigEnvironment) {

  var resolver = _simpleMapOpenlayersEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleMapOpenlayersEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('simple-map-openlayers-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('simple-map-openlayers-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('simple-map-openlayers-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('simple-map-openlayers-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('simple-map-openlayers-ember/tests/routes/map-openlayers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/map-openlayers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map-openlayers.js should pass jshint.\nroutes/map-openlayers.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/map-openlayers.js: line 7, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('simple-map-openlayers-ember/tests/test-helper', ['exports', 'simple-map-openlayers-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _simpleMapOpenlayersEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_simpleMapOpenlayersEmberTestsHelpersResolver['default']);
});
define('simple-map-openlayers-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('simple-map-openlayers-ember/tests/unit/routes/map-openlayers-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:map-openlayers', 'Unit | Route | map openlayers', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('simple-map-openlayers-ember/tests/unit/routes/map-openlayers-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/map-openlayers-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/map-openlayers-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('simple-map-openlayers-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
