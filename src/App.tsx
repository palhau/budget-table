import BudgetTable from './components/BudgetTable';
import Header from './components/Header';
import { DataContextProvider } from './lib/context';
import './styles/globals.css';

function App() {
  return (
    <DataContextProvider value={[]}>
      <div className="container">
        <Header />
        <BudgetTable />
      </div>
    </DataContextProvider>
  );
}

export default App;
