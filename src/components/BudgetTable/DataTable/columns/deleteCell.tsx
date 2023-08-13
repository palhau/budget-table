import { TrashIcon } from 'lucide-react';
import { Button } from '../../../ui/button';

//@ts-ignore
const DeleteCell = ({ row, table }) => {
  const handleDeleteRow = () => {
    const meta = table.options.meta;
    meta?.deleteRow(row.index);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleDeleteRow}
        name="delete"
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </>
  );
};

export default DeleteCell;
