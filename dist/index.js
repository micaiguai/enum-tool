// src/index.ts
function bindMethods(functionalObj, items) {
  functionalObj.all = () => {
    return items;
  };
}
function enumify(items) {
  const functionalObj = function(value) {
    return items.find((item) => item.value === value);
  };
  items.forEach((item) => {
    functionalObj[item.key] = item.value;
  });
  bindMethods(functionalObj, items);
  return functionalObj;
}
export {
  enumify
};
