define('ember-inflector/lib/system/string', ['exports', 'ember-inflector/lib/system/inflector'], function (exports, _emberInflectorLibSystemInflector) {
  'use strict';

  function pluralize() {
    var _Inflector$inflector;

    return (_Inflector$inflector = _emberInflectorLibSystemInflector['default'].inflector).pluralize.apply(_Inflector$inflector, arguments);
  }

  function singularize(word) {
    return _emberInflectorLibSystemInflector['default'].inflector.singularize(word);
  }

  exports.pluralize = pluralize;
  exports.singularize = singularize;
});