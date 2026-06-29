"use client";

import { denominations } from "./types";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

export default function DenominationSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-gray-800">
          Expected Denomination
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Optional. Helps identify your cards when checking multiple balances.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {denominations.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() =>
              onChange(value === amount ? null : amount)
            }
            className={`px-4 py-2 rounded-full border transition-all font-medium
            ${
              value === amount
                ? "bg-black text-white border-black"
                : "border-gray-300 hover:border-black"
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>
    </div>
  );
}