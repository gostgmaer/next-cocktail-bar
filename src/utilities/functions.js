export const cleanQueryparam = (query) => {
    return Object.keys(query).forEach(
      (key) =>
        (query[key] === "" || query[key] == null || query[key] === undefined) &&
        delete query[key]
    );
  };