'use strict';

function validateBrackets(string) {
  let stack = {};
  let bracket = string;
  if (bracket === '(' || bracket === '[' || bracket === '{') {
    stack.push(bracket);
  } else if (bracket === ')' || bracket === ']' || bracket === '}'){
    let close = stack.pop();
    if (bracket === ')' && close !== '(' || bracket === ']' && close!=='['|| bracket === '}' && close !== '{'){
      return false;
    }
  }
  return true;
}

module.exports = { validateBrackets };
