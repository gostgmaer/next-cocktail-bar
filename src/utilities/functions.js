export const cleanQueryparam = (query) => {
  return Object.keys(query).forEach(
    (key) =>
      (query[key] === "" || query[key] == null || query[key] === undefined) &&
      delete query[key]
  );
};
export const mergeinOneArray = (array1, array2,id1) =>
  array1.map((itm) => ({
    ...array2.find((item) => item[`${id1}`] === itm[`${id1}`] && item),
    ...itm,
  }));

