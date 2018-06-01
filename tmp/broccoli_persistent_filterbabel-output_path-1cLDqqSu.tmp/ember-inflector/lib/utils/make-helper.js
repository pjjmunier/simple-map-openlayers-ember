define("ember-inflector/lib/utils/make-helper", ["exports"], function (exports) {
  "use strict";

  exports["default"] = makeHelper;

  function makeHelper(helperFunction) {
    if (Ember.Helper) {
      return Ember.Helper.helper(helperFunction);
    }
    if (Ember.HTMLBars) {
      return Ember.HTMLBars.makeBoundHelper(helperFunction);
    }
    return Ember.Handlebars.makeBoundHelper(helperFunction);
  }
});