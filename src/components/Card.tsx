import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function Card({ title, description, image, link = "#" }: CardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
      {/* Full Card Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover Overlay with Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold leading-tight mb-2">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3">
              {description}
            </p>
            
            {/* Learn More Link */}
            <a 
              href={link}
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium transition-colors duration-200 group/link text-sm"
            >
              <span>Learn More</span>
              <svg 
                className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}