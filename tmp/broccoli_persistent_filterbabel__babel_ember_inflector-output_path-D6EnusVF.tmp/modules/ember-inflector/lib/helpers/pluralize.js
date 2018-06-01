function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { pluralize } from 'ember-inflector';
import makeHelper from '../utils/make-helper';

/**
 *
 * If you have Ember Inflector (such as if Ember Data is present),
 * pluralize a word. For example, turn "ox" into "oxen".
 *
 * Example:
 *
 * {{pluralize count myProperty}}
 * {{pluralize 1 "oxen"}}
 * {{pluralize myProperty}}
 * {{pluralize "ox"}}
 *
 * @for Ember.HTMLBars.helpers
 * @method pluralize
 * @param {Number|Property} [count] count of objects
 * @param {String|Property} word word to pluralize
 */
export default makeHelper(function (params, hash) {
  var fullParams = new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(params))))();

  if (fullParams.length === 2) {
    fullParams.push({ withoutCount: hash["without-count"] });
  }

  return pluralize.apply(undefined, _toConsumableArray(fullParams));
});