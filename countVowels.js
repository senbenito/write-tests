'use strict';

exports.countVowels = function(string) {
//your code here
  if (string.length === 0) return 'invalid input';
  let results = 0;
  for (let i=0; i<string.length; i++){
    if (string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' ||
        string[i] === 'o' ||
        string[i] === 'u' ){
          results += 1;
        }
  }
  return results;
};
