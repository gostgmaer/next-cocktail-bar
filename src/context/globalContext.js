import React, { useState, useContext, createContext } from "react";
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
