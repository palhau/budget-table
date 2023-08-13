import { useContext, useEffect } from 'react';
import { DataTable } from './DataTable';
import { columns } from './DataTable/columns';
import DataContext from '../../lib/context';
import { mockData } from '../../lib/utils';

const BudgetTable = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <section className="container mt-20">
      <div className="flex py-2 border rounded-lg border-black font-mono">
        <DataTable columns={columns} data={mockData} />
      </div>
    </section>
  );
};

export default BudgetTable;
