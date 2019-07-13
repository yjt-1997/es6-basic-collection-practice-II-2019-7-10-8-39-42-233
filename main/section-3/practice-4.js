'use strict';

function buildList(collectionA) {
  let result = [];
  collectionA.reduce((result, cur) => {
    let letter = cur;
    let number = 1;
    if(cur.length!=1){
      letter = cur.split("-")[0].trim();
      number = parseInt(cur.split("-")[1].trim());
    }
    result.find(item => item.key == letter) ? result.find(item => item.key == letter).count+=number : result.push({ key: letter, count: number });
    return result;
  }, result)
  return result;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA = buildList(collectionA);
  collectionA.forEach(element => {
    if (objectB['value'].includes(element.key)) {
      element.count -= Math.floor(element.count / 3);
    }
  });
  return collectionA;
}
