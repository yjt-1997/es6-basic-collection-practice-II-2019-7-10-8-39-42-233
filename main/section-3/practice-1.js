'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if(objectB['value'].includes(element.key)){
      element.count--;
    }
  });
  return collectionA;
}
