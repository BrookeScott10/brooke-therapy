"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import GiftCardItem from "./GiftCardItem";
import DenominationSelector from "./DenominationSelector";
import BalanceConfirmModal from "./GiftCardBalanceModal";
import { GiftCard } from "./types";
import { useGiftCardCheck } from "@/hooks/useGiftCardCheck";
import { toast } from "sonner";

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
  const [denominationError, setDenominationError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { mutate, isPending } = useGiftCardCheck();

  const handleChange = (
    id: number,
    field: keyof GiftCard,
    value: string | boolean,
  ) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: value } : card,
      ),
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
    setCards((prev) => prev.filter((card) => card.id !== id));

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

  const handleSubmit = () => {
    setDenominationError("");

    if (!denomination) {
      setDenominationError("Please select a gift card value.");
      return;
    }

    if (!validate()) return;

    setShowModal(true);
  };

 const confirmSubmit = () => {
  mutate(
    {
      cards,
      denomination,
    },
    {
      onSuccess: () => {
        setShowModal(false);

        toast.success("Gift card submitted successfully.");

        onSubmit?.({
          cards,
          denomination,
        });
      },

      onError: (error: any) => {
        toast.error(
          error?.message || "Something went wrong. Please try again."
        );
      },
    }
  );
};
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-6 lg:px-4">
        <div className="mx-auto w-full  overflow-hidden rounded-3xl bg-white ">
          {/* Header */}
          <div className="border-b px-5 py-8 text-center sm:px-8 lg:px-16">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Check Your Gift Card Balance
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-500 sm:text-base">
              Enter one or more gift card numbers below to instantly check
              available balances.
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold">
                We Accept
              </h4>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {[
                  "Chime",
                  "Cash App",
                  "Cash (regular clients only)",
                  "Bitcoin",
                  "Gift Card",
                  "Zelle",
                  "Apple Pay",
                ].map((method) => (
                  <div
                    key={method}
                    className="rounded-full bg-black px-4 py-2 text-xs text-white sm:text-sm"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-10">
            {/* Left */}
            <div className="relative h-[350px] sm:h-[700px] lg:min-h-[750px]">
              <img
                src="/images/card.png"
                alt="Gift Card"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right */}
            <div className="flex items-center justify-center px-4 py-8 sm:px-8 lg:px-16">
              <div className="w-full  space-y-6">
                <DenominationSelector
                  value={denomination}
                  onChange={(value) => {
                    setDenomination(value);
                    setDenominationError("");
                  }}
                />

                {denominationError && (
                  <p className="text-sm text-red-500">
                    {denominationError}
                  </p>
                )}

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

                <button
                  type="button"
                  onClick={addCard}
                  className="w-full rounded-xl border border-dashed border-gray-300 py-4 text-sm font-medium text-gray-600 transition hover:border-black hover:text-black"
                >
                  + Add Another Gift Card
                </button>

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={onCancel}
                    className="w-full rounded-lg px-6 py-3 text-sm text-gray-700 transition hover:bg-gray-100 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isPending}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition sm:w-auto ${
                      isPending
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-black hover:bg-gray-900"
                    }`}
                  >
                    {isPending && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}

                    {isPending ? "Checking..." : "Check Balance"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <BalanceConfirmModal
  open={showModal}
  amount={denomination}
  loading={isPending}
  onClose={() => !isPending && setShowModal(false)}
  onConfirm={confirmSubmit}
/>
    </>
  );
}