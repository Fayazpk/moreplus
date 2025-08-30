"use client";


import Card from "@/components/Card";
import { useEffect, useState } from "react";
interface Product {
  title: string;
  description: string;
  image: string;
}
const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  

  return (
    <div className="min-h-screen bg-gray-50 p-8">
    <div className="text-center mb-12">
          <div className="text-4xl font-bold mb-4">
            <span className="text-blue-600">more</span>
            <span className="text-gray-700">plus</span>
          </div>
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            Discover our range of high-quality cleaning solutions designed to meet all your household and industrial needs with unmatched effectiveness and care.
          </p>
        </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
    </div>
  );
};

export default Page;
