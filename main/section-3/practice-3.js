'use strict';

function buildList(collectionA) {
  let result = [];
  collectionA.reduce((result, cur) => {
    result.find(item => item.key == cur) ? result.find(item => item.key == cur).count++ : result.push({ key: cur, count: 1 });
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
