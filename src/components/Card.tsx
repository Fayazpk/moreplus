import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
  }
  
  export default function Card({ title, description, image, link = "#" }: CardProps) {
    return (
      <div className="group bg-white rounded-xl overflow-hidden  shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
        {/* Large Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Minimal Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          
          {/* Learn More Link - Styled like your CTA */}
          <div className="pt-2">
            <a 
              href={link}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/link text-sm"
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
    );
  }
  
