import { Payment } from '../components/BudgetTable/DataTable/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mockData: Payment[] = [
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
