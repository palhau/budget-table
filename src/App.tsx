import { useState } from 'react';
import BudgetTable from './components/BudgetTable';
import Header from './components/Header';
import { DataContextProvider } from './lib/context';
import './styles/globals.css';
import { Payment } from './components/BudgetTable/DataTable/types';
import AddExpense from './components/AddExpense';
import { mockData } from './lib/utils';

function App() {
  const [data, setData] = useState<Payment[]>([...mockData]);
  return (
    //@ts-ignore
    <DataContextProvider value={{ data, setData }}>
      <div className="container">
        <Header />
        <BudgetTable />
        <AddExpense />
      </div>
    </DataContextProvider>
  );
}

export default App;
