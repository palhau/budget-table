import { Payment } from '@/components/BudgetTable/DataTable/types';
import { createContext } from 'react';
import { mockData } from './utils';

const DataContext = createContext({
  data: [...mockData],
  setData: (data: Payment[]) => {}
});

export const DataContextProvider = DataContext.Provider;
export default DataContext;
