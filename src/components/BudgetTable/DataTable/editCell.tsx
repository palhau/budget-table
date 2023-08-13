import { Button } from '../../ui/button';
import React from 'react';

//@ts-ignore
const EditCell = ({ row, table }) => {
  const meta = table.options.meta;
  const setEditedRows = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== 'edit') {
      meta?.revertData(row.index, e.currentTarget.name === 'cancel');
    }
  };

  return meta?.editedRows[row.id] ? (
    <>
      <Button variant="outline" size="sm" onClick={setEditedRows} name="cancel">
        X
      </Button>{' '}
      <Button variant="outline" size="sm" onClick={setEditedRows} name="done">
        ✔
      </Button>
    </>
  ) : (
    <Button variant="outline" size="sm" onClick={setEditedRows} name="edit">
      ✐
    </Button>
  );
};

export default EditCell;
