define('ember-inflector/index', ['exports', 'ember-inflector/lib/system', 'ember-inflector/lib/ext/string'], function (exports, _emberInflectorLibSystem, _emberInflectorLibExtString) {
  'use strict';

  _emberInflectorLibSystem.Inflector.defaultRules = _emberInflectorLibSystem.defaultRules;

  Object.defineProperty(Ember, 'Inflector', {
    get: function get() {
      Ember.deprecate('Ember.Inflector is deprecated. Please explicitly: import Inflector from \'ember-inflector\';', false, {
        id: 'ember-inflector.globals',
        until: '3.0.0'
      });

      return _emberInflectorLibSystem.Inflector;
    }
  });

  Object.defineProperty(Ember.String, 'singularize', {
    get: function get() {
      Ember.deprecate('Ember.String.singularize() is deprecated. Please explicitly: import { singularize } from \'ember-inflector\';', false, {
        id: 'ember-inflector.globals',
        until: '3.0.0'
      });

      return _emberInflectorLibSystem.singularize;
    }
  });

  Object.defineProperty(Ember.String, 'pluralize', {
    get: function get() {
      Ember.deprecate('Ember.String.pluralize() is deprecated. Please explicitly: import { pluralize } from \'ember-inflector\';', false, {
        id: 'ember-inflector.globals',
        until: '3.0.0'
      });

      return _emberInflectorLibSystem.pluralize;
    }
  });

  exports['default'] = _emberInflectorLibSystem.Inflector;
  exports.pluralize = _emberInflectorLibSystem.pluralize;
  exports.singularize = _emberInflectorLibSystem.singularize;
  exports.defaultRules = _emberInflectorLibSystem.defaultRules;
});