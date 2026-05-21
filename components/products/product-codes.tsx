"use client";

import Barcode from "react-barcode";

import QRCode from "react-qr-code";

interface Props {
  sku: string;
}

export default function ProductCodes({
  sku,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl border p-6">
        <h2 className="text-2xl font-bold mb-5">
          Barcode
        </h2>

        <Barcode value={sku} />
      </div>

      <div className="bg-white rounded-2xl border p-6">
        <h2 className="text-2xl font-bold mb-5">
          QR Code
        </h2>

        <QRCode value={sku} />
      </div>
    </div>
  );
}