import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Save } from 'lucide-react';
import { useContext, useState } from 'react';
import DataContext from '../../lib/context';

const initialState = {
  id: Math.floor(Math.random() * 500),
  title: '',
  type: '',
  category: '',
  totalAmount: 0,
  creationDate: new Date(),
};
const AddExpense = () => {
  const { setData } = useContext(DataContext);
  const [newRow, setNewRow] = useState(initialState);

  const handleNewRow = (field: string, value: string | number) => {
    setNewRow((old) => ({ ...old, [field]: value }));
  };

  const handleSaveNewRow = () => {
    try {
      //@ts-ignore
      setData((oldData) => [...oldData, newRow]);
      setNewRow(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mt-20 flex flex-col">
      <div className="p-2 border rounded-lg border-black font-mono">
        <h2 className="content-center font-bold text-left text-xl px-4 py-2">
          New Expense:{' '}
        </h2>
        <div className="flex flex-row justify-around p-2">
          <Input
            placeholder="Title"
            className="m-2"
            value={newRow.title}
            onChange={(e) => handleNewRow('title', e.target.value)}
            type="text"
          />
          <Select
            onValueChange={(value) => handleNewRow('type', value)}
            defaultValue={newRow.type}
          >
            <SelectTrigger className="w-fit m-2">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry</SelectItem>
              <SelectItem value="loss">Loss</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Category"
            className="m-2"
            value={newRow.category}
            onChange={(e) => handleNewRow('category', e.target.value)}
            type="text"
          />
          <Input
            placeholder="Amount"
            className="m-2"
            value={newRow.totalAmount}
            onChange={(e) =>
              handleNewRow('totalAmount', parseFloat(e.target.value))
            }
            type="number"
          />
          <Button
            onClick={handleSaveNewRow}
            variant="outline"
            className="w-[50px] pl-3 ml-4 text-left font-normal self-center"
          >
            <Save className="ml-auto h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddExpense;
