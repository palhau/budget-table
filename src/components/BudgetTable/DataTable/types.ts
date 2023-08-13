export type Payment = {
  id: string;
  title: string;
  type: 'entry' | 'loss';
  category: string;
  totalAmount: number;
  creationDate: Date;
};

export type Option = {
  label: string;
  value: string;
};