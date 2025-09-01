import Image from "next/image";
import { useEffect, useState } from "react";
import CenterView from "./CenterView";

interface Product {
  title: string;
  description: string;
  category: string;
  usage: string;
  image: string;
}

export default function Getby() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<'category' | 'usage' | null>(null);

  const getby = [
    {
      title: "Browse by type",
      key: "category",
      url: "/category",
      image: "/cleaningcategory.jpeg",
      description: "Explore diverse collections and find exactly what you need",
      gradient: "from-blue-500 via-teal-500 to-green-500",
      lightGradient: "from-blue-50 via-teal-50 to-green-50"
    },
    {
      title: "Browse by need", 
      key: "usage",
      url: "/usage",
      image: "/cleaningusage.jpeg",
      description: "Master powerful tools and unlock your creative potential",
      gradient: "from-purple-500 via-blue-500 to-teal-500",
      lightGradient: "from-purple-50 via-blue-50 to-teal-50"
    }
  ];

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  // Fixed filter logic - get unique items by the filter field
  const filterproduct = filter && products.length > 0 
    ? Array.from(new Map(products.map((p) => [p[filter], p])).values()) 
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200/20 via-teal-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-200/20 via-blue-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 space-y-4 sm:space-y-6">
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium px-4">
            Find the right moreplus product for you
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
          {getby.map((item, index) => {
            const isLeft = index === 0;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 ${
                  isLeft ? "lg:-translate-y-6" : "lg:translate-y-6"
                }`}
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:bg-white/95 min-h-[300px] sm:min-h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 opacity-25"
                    priority
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>

                  <div className="relative z-10 text-center space-y-4 sm:space-y-8 flex flex-col justify-center h-full">
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 max-w-sm mx-auto">
                      {item.description}
                    </p>

                    {/* Button */}
                    <div className="pt-4 sm:pt-6">
                      <button
                        onClick={() => {
                          setFilter(item.key as "category" | "usage");
                          setOpen(true);
                        }}
                        className={`group/btn relative inline-flex items-center px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r ${item.gradient} text-white font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                      >
                        <span className="relative z-10">Get Started</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal - Remove duplicate wrapper */}
      {open && (
        <CenterView
          onClose={() => setOpen(false)}
          products={filterproduct} 
          filterType={filter}   
        />
      )}
    </div>
  );
}