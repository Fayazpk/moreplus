"use client";
import Image from "next/image";
import { X } from "lucide-react";

interface Product {
  title: string;
  description: string;
  category: string;
  usage: string;
  image: string;
}

const CenterView = ({
  onClose,
  products,
  filterType,
}: {
  onClose: () => void;
  products: Product[];
  filterType: "category" | "usage" | null;
}) => {
  return (
    <div>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Browse by {filterType}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.title}
              width={100}
              height={100}
              className="mx-auto mb-3 object-contain"
            />
            <h3 className="font-semibold text-lg text-gray-800">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              {filterType === "category" ? p.category : p.usage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterView;
