"use client";

import { Loader2 } from "lucide-react";

interface Props {
  open: boolean;
  amount: number | null;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function BalanceConfirmModal({
  open,
  amount,
  loading = false,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[420px]">
        <h2 className="text-xl font-semibold mb-4">Confirm Balance Check</h2>

        <p className="text-gray-600">Selected Gift Card Value:</p>

        <div className="text-3xl font-bold text-orange-700 mt-3 mb-6">
          ${amount}
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 rounded-lg border">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-700 px-5 py-3 text-white hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}

            {loading ? "Submitting..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
