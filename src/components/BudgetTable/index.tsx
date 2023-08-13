import { DataTable } from './DataTable';
import { columns } from './DataTable/columns';
import { Payment } from './DataTable/types';

const mockData: Payment[] = [
  {
    id: '1',
    title: 'INV001',
    type: 'entry',
    category: 'Paid',
    totalAmount: 250,
    creationDate: new Date(),
  },
  {
    id: '2',
    title: 'INV002',
    type: 'loss',
    category: 'Pending',
    totalAmount: 150,
    creationDate: new Date(),
  },
];

const BudgetTable = () => {
  return (
    <section className="container mt-20">
      <div className="flex py-2 border rounded-lg border-black font-mono">
        <DataTable columns={columns} data={mockData} />
      </div>
    </section>
  );
};

export default BudgetTable;
