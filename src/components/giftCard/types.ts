export interface GiftCard {
  id: number;
  cardNumber: string;
  pin: string;
  noPin: boolean;
}

export const denominations = [
  25,
  50,
  100,
  200,
  250,
  500,
];