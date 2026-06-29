"use client";

import { useState } from "react";
import GiftCardBalanceForm from "./GiftCardBalanceForm";
import { GiftCard } from "./types";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Result {
  cardNumber: string;
  balance?: number;
  error?: string;
}

export default function GiftCardBalanceModal({
  open,
  onClose,
}: Props) {
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (data: {
    cards: GiftCard[];
    denomination: number | null;
  }) => {
    setLoading(true);

    try {
      // 🔌 replace with real API later
      await new Promise((r) => setTimeout(r, 1200));

      const mocked: Result[] = data.cards.map((c) => ({
        cardNumber: c.cardNumber,
        balance:
          c.cardNumber.length < 8
            ? undefined
            : Math.floor(Math.random() * 500) + 10,
        error:
          c.cardNumber.length < 8 ? "Invalid card number" : undefined,
      }));

      setResults(mocked);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResults(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        
        {/* HEADER */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Gift Card Balance
            </h2>
            <p className="text-sm text-gray-500">
              Check your card balance instantly
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        {!results ? (
          <GiftCardBalanceForm
            onSubmit={handleSubmit}
            onCancel={onClose}
          />
        ) : (
          <div className="space-y-4">
            
            <h3 className="text-lg font-semibold">
              Results
            </h3>

            {results.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500">
                  Card Ending •••• {r.cardNumber.slice(-4)}
                </p>

                {r.error ? (
                  <p className="text-red-500 text-sm mt-2">
                    {r.error}
                  </p>
                ) : (
                  <p className="text-green-600 font-semibold mt-2 text-lg">
                    ${r.balance}
                  </p>
                )}
              </div>
            ))}

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 pt-4">
              
              <button
                onClick={reset}
                className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Check Another Card
              </button>

              <button
                onClick={onClose}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}