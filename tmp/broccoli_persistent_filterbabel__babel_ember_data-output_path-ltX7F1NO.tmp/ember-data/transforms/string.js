
import Transform from './transform';

/**
  The `DS.StringTransform` class is used to serialize and deserialize
  string attributes on Ember Data record objects. This transform is
  used when `string` is passed as the type parameter to the
  [DS.attr](../../data#method_attr) function.

  Usage

  ```app/models/user.js
  import DS from 'ember-data';

  export default DS.Model.extend({
    isAdmin: DS.attr('boolean'),
    name: DS.attr('string'),
    email: DS.attr('string')
  });
  ```

  @class StringTransform
  @extends DS.Transform
  @namespace DS
 */
export default Transform.extend({
  deserialize: function deserialize(serialized) {
    return Ember.isNone(serialized) ? null : String(serialized);
  },
  serialize: function serialize(deserialized) {
    return Ember.isNone(deserialized) ? null : String(deserialized);
  }
});