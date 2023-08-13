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

const AddExpense = () => {
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
            onChange={(e) => console.log('OI')}
            type={'text'}
          />
          <Select>
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
            onChange={(e) => console.log('OI')}
            type={'text'}
          />
          <Input
            placeholder="Amount"
            className="m-2"
            onChange={(e) => console.log('OI')}
            type={'text'}
          />
          <Button
            onClick={() => console.log('OI')}
            variant={'ghost'}
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
