import { ColumnDef } from '@tanstack/react-table';
import EditCell from './editCell';
import TableCell from './tableCell';
import { Payment } from '../types';
import DeleteCell from './deleteCell';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: TableCell,
    meta: {
      type: 'text',
    },
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: TableCell,
    meta: {
      type: 'select',
      options: [
        { value: 'entry', label: 'Entry' },
        { value: 'loss', label: 'Loss' },
      ],
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: TableCell,
    meta: {
      type: 'text',
    },
  },
  {
    accessorKey: 'totalAmount',
    header: 'Amount',
    cell: TableCell,
    meta: {
      type: 'currency',
    },
  },
  {
    id: 'edit',
    header: 'Edit',
    cell: EditCell,
  },
  {
    id: 'delete',
    header: 'Delete',
    cell: DeleteCell,
  },
];
