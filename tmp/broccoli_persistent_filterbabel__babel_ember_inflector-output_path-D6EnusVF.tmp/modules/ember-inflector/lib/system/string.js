import Inflector from './inflector';

function pluralize() {
  var _Inflector$inflector;

  return (_Inflector$inflector = Inflector.inflector).pluralize.apply(_Inflector$inflector, arguments);
}

function singularize(word) {
  return Inflector.inflector.singularize(word);
}

export { pluralize, singularize };