"use client";

import { Trash2 } from "lucide-react";
import { GiftCard } from "./types";

interface GiftCardItemProps {
  index: number;
  card: GiftCard;
  error?: string; // ✅ NEW
  onChange: (
    id: number,
    field: keyof GiftCard,
    value: string | boolean
  ) => void;
  onRemove: (id: number) => void;
  canRemove?: boolean;
}

export default function GiftCardItem({
  index,
  card,
  error,
  onChange,
  onRemove,
  canRemove = true,
}: GiftCardItemProps) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 shadow-sm transition
      ${error ? "border-red-300" : "border-gray-200"}
      `}
    >
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Card #{index + 1}
        </h3>

        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(card.id)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
          >
            <Trash2 size={16} />
            Remove
          </button>
        )}
      </div>

      {/* FIELDS */}
      <div className="space-y-5">
        {/* CARD NUMBER */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Gift Card Number
          </label>

          <input
            type="text"
            value={card.cardNumber}
            onChange={(e) =>
              onChange(card.id, "cardNumber", e.target.value)
            }
            placeholder="Enter your gift card number"
            className={`w-full rounded-lg border px-4 py-3 outline-none transition
              ${
                error
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10"
              }
            `}
          />
        </div>

        {/* PIN */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            PIN
          </label>

          <input
            type="password"
            disabled={card.noPin}
            value={card.pin}
            onChange={(e) =>
              onChange(card.id, "pin", e.target.value)
            }
            placeholder={
              card.noPin ? "PIN not required" : "Enter your PIN"
            }
            className={`w-full rounded-lg border px-4 py-3 outline-none transition
              ${
                card.noPin
                  ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  : error
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10"
              }
            `}
          />
        </div>

        {/* NO PIN */}
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={card.noPin}
            onChange={(e) =>
              onChange(card.id, "noPin", e.target.checked)
            }
            className="h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm text-gray-600">
            This gift card doesn't have a PIN
          </span>
        </label>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-sm text-red-500 font-medium">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}