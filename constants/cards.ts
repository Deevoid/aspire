export type TransactionType = {
  id: string;
  date: string;
  merchantName?: string;
  amount: number;
  type: "credit" | "debit";
  category: "gift" | "travel" | "entertainment";
  description: string;
};

export const transactionCategoryColorMap = {
  gift: "#009DFF1A",
  travel: "#00D6B51A",
  entertainment: "#F251951A",
};

export const transactionCategoryIconMap = {
  gift: "/images/file-storage.svg",
  travel: "/images/flights.svg",
  entertainment: "/images/megaphone.svg",
};

export const transactionCategoryIconSizeMap = {
  gift: {
    height: 15.2,
    width: 16,
  },
  travel: {
    height: 16,
    width: 16,
  },
  entertainment: {
    height: 14,
    width: 16,
  },
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
  cardType?: "visa";
  cardState?: "active" | "frozen";
  transactions?: Array<TransactionType>;
};

export const debitCards: Array<SingleCardType> = [
  {
    id: "123",
    name: "Mark Henry",
    cardNumber: "1234567891012020",
    expiryDate: "12/20",
    cvv: "123",
    cardType: "visa",
    cardState: "active",
    transactions: defaultTransactions,
  },
  {
    id: "124",
    name: "Bruce Wayne",
    cardNumber: "1234567891012021",
    expiryDate: "12/25",
    cvv: "123",
    cardType: "visa",
    cardState: "frozen",
    transactions: defaultTransactions,
  },
  {
    id: "125",
    name: "Tony Stark",
    cardNumber: "1234567891012022",
    expiryDate: "12/28",
    cvv: "123",
    cardType: "visa",
    cardState: "active",
    transactions: defaultTransactions,
  },
];
