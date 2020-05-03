import Vue from 'vue';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};


export const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

export const kebabCase = function(str) {
  const hyphenateTE = /([^-])(A-Z)/g;
  return str
    .replace(hyphenateTE, '$1-$2')
    .replace(hyphenateTE, '$1-$2')
    .toLowerCase();
};