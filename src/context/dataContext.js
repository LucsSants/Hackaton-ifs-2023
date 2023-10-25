import React, { createContext, useContext, useState } from 'react';

// Crie o contexto
const DataContext = createContext();

// Crie um provedor (Provider) personalizado para o contexto
export function DataProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// Crie um gancho (hook) personalizado para acessar o contexto
export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useCount deve ser usado dentro de um CountProvider');
  }

  return context;
}