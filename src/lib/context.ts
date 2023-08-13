import { createContext } from 'react';

const DataContext = createContext({
  data: [],
  setData: (data: any) => {}
});

export const DataContextProvider = DataContext.Provider;
export default DataContext;
