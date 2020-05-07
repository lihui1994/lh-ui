import Vue from 'vue';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function noop() {};

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

export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for(let len = keyArr.length; i < len - 1; ++i) {
    if(!tempObj && !strict) break;
    let key = keyArr[i];
    if(key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if(strict) {
        throw new Error('please transfer a valid prop path to form item!'); 
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
};