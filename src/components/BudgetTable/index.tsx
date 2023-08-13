import { useContext } from 'react';
import { DataTable } from './DataTable';
import { columns } from './DataTable/columns';
import DataContext from '../../lib/context';

const BudgetTable = () => {
  const { data } = useContext(DataContext);
  return (
    <section className="container mt-20">
      <div className="flex py-2 border rounded-lg border-black font-mono">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default BudgetTable;
