import Image from "next/image";
import { useEffect, useState } from "react";
import CenterView from "./CenterView";


export default function Getby() {
interface product{
    title: string;
    description: string;
    category: string;
    usage: string;
    image: string;

}


  const [open, setOpen] = useState(false);
  const [products,setProducts] =useState<product[]>([])
  const [filter,setFilter]=useState<'category' | 'usage' | null >(null)

  const getby = [
    {
      title: "Browse by type",
      key : "category",
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



  const filterproduct = filter && products.length > 0 ? Array.from(new Map(products.map((p) => [p[filter], p])).values()) : [] 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* --- Background --- */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 via-teal-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 via-blue-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center mb-16 space-y-6">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Find the right moreplus product for you
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* --- Cards --- */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {getby.map((item, index) => {
            const isLeft = index === 0;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 hover:-translate-y-4 ${
                  isLeft ? "lg:-translate-y-6" : "lg:translate-y-6"
                }`}
              >
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:bg-white/95">
                  <Image
                    src={item.image}
                    alt="MorePlus Detergent"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 opacity-25"
                    priority
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>

                  <div className="relative z-10 text-center space-y-8">
                    <h3 className="text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 max-w-sm mx-auto">
                      {item.description}
                    </p>

                    {/* Button to open modal */}
                    <div className="pt-6">
                    <button
  onClick={() => {
    setFilter(item.key as "category" | "usage");
    setOpen(true);
  }}
  className={`group/btn relative inline-flex items-center px-10 py-5 bg-gradient-to-r ${item.gradient} text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
>
  <span className="relative z-10 mr-3">Get Started</span>
</button>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {open && (
  <div className="fixed inset-0 flex items-center justify-center bg-transparent opacity-90 z-50">
    <div className="bg-white p-6 rounded-2xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 relative">
      <CenterView
        onClose={() => setOpen(false)}
        products={filterproduct} 
        filterType={filter}   
      />
    </div>
  </div>
)}
    </div>
  );
}
