import React, { useContext, createContext, useState, useCallback } from 'react';

const TabsContext = createContext({});

const TabsProvider = ({ children }) => {
  const [tab, setTab] = useState('home');

  const setTabSelected = useCallback((tab) => {
    setTab(tab);
    console.log(tab);
  }, []);

  return (
    <TabsContext.Provider value={{ setTabSelected, tab }}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabs = () => useContext(TabsContext);

export { TabsProvider, useTabs };
