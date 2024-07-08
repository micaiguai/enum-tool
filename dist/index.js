// src/index.ts
function enumify(items) {
  const obj = (value) => {
    return items.find((item) => item.value === value);
  };
  items.forEach((item) => {
    obj[item.key] = item.value;
  });
  return obj;
}
export {
  enumify
};
