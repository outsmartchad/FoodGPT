import React, { createContext, useState } from "react";

export const AreaContext = createContext();

const AreaProvider = ({ children }) => {
  const [selectedArea, setSelectedArea] = useState("");

  return (
    <AreaContext.Provider value={{ selectedArea, setSelectedArea }}>
      {children}
    </AreaContext.Provider>
  );
};

export default AreaProvider;
