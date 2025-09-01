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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] relative overflow-hidden">
        {/* Header with close button - fixed at top */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
          <h2 className="text-xl sm:text-2xl font-bold">
            Browse by {filterType}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="relative h-24 w-24 mx-auto mb-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {p.description}
                </p>
                <p className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                  {filterType === "category" ? p.category : p.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterView;