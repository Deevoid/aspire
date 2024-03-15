export type TransactionType = {
  id: string;
  date: string;
  merchantName?: string;
  amount: number;
  type: "credit" | "debit";
  category: "gift" | "travel" | "entertainment";
  description: string;
};

export const defaultTransactions: Array<TransactionType> = [
  {
    id: "1234",
    date: "20 May 2020",
    merchantName: "Hamleys",
    amount: 150,
    type: "credit",
    category: "gift",
    description: "Refund on debit card",
  },
  {
    id: "1235",
    date: "20 May 2020",
    merchantName: "Hamleys",
    amount: 150,
    type: "debit",
    category: "travel",
    description: "Charged to debit card",
  },
  {
    id: "1236",
    date: "20 May 2020",
    merchantName: "Hamleys",
    amount: 150,
    type: "debit",
    category: "entertainment",
    description: "Charged to debit card",
  },
  {
    id: "1237",
    date: "20 May 2020",
    merchantName: "Hamleys",
    amount: 150,
    type: "debit",
    category: "gift",
    description: "Charged to debit card",
  },
];

export type SingleCardType = {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardType: "visa";
  cardState: "active" | "frozen";
  transactions?: Array<TransactionType>;
};

export const debitCards: Array<SingleCardType> = [
  {
    id: "123",
    name: "Mark Henry",
    cardNumber: "1234 5678 9101 2020",
    expiryDate: "12/20",
    cvv: "123",
    cardType: "visa",
    cardState: "active",
    transactions: defaultTransactions,
  },
];
