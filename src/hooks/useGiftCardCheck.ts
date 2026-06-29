import { useMutation } from "@tanstack/react-query";

type Payload = {
  cards: {
    cardNumber: string;
    pin: string;
    noPin: boolean;
  }[];
  denomination: number | null;
};

async function sendGiftCard(data: Payload) {
  const res = await fetch("/api/giftcard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send");
  }

  return res.json();
}

export function useGiftCardCheck() {
  return useMutation({
    mutationFn: sendGiftCard,
  });
}