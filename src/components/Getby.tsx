import Image from "next/image";

export default function Getby() {
    const getby = [{
        title: "Browse by type",
        url: "/category",
        image: "/cleaningcategory.jpeg",
        description: "Explore diverse collections and find exactly what you need",
        gradient: "from-blue-500 via-teal-500 to-green-500",
        lightGradient: "from-blue-50 via-teal-50 to-green-50"
    },
    {
        title: "Browse by need",
        url: "/usage", 
        image: "/cleaningusage.jpeg",
        description: "Master powerful tools and unlock your creative potential",
        gradient: "from-purple-500 via-blue-500 to-teal-500", 
        lightGradient: "from-purple-50 via-blue-50 to-teal-50"
    }]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Subtle animated background elements */}
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

                {/* Cards container */}
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {getby.map((item, index) => {
                        const isLeft = index === 0;
                        return (
                            <div 
                                key={index}
                                className={`group relative transition-all duration-700 hover:-translate-y-4 ${isLeft ? 'lg:-translate-y-6' : 'lg:translate-y-6'}`}
                            >
                                {/* Main card */}
                                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:bg-white/95">
                                <Image 
                                    src={item.image}
                                    alt="MorePlus Detergent" 
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300 opacity-25"
                                    priority
                                />
                                    {/* Dynamic background overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                    
                                    {/* Floating gradient orb */}
                                    <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-700`}></div>
                                    
                                    <div className="relative z-10 text-center space-y-8">
                                        {/* Icon with magnetic effect */}
                                        <div className="relative">
                                            <div className={`w-24 h-24 ` }>
                                               
                                            </div>
                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-20 scale-125 blur-xl group-hover:scale-140 transition-all duration-700 mx-auto`}></div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="space-y-6">
                                            <h3 className="text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 max-w-sm mx-auto">
                                                {item.description}
                                            </p>
                                            
                                            {/* Enhanced CTA button */}
                                            <div className="pt-6">
                                                <a 
                                                    href={item.url}
                                                    className={`group/btn relative inline-flex items-center px-10 py-5 bg-gradient-to-r ${item.gradient} text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                                                >
                                                    {/* Button shimmer effect */}
                                                    <div className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                                    
                                                    <span className="relative z-10 mr-3">Get Started</span>
                                                    
                                                    {/* Premium arrow animation */}
                                                    <div className="relative overflow-hidden w-6 h-6">
                                                        <svg className="absolute inset-0 transform transition-transform duration-300 group-hover/btn:translate-x-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                        <svg className="absolute inset-0 transform -translate-x-6 transition-transform duration-300 group-hover/btn:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom gradient accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                                </div>

                                {/* Floating shadow element */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-3xl blur-xl scale-95 -z-10 group-hover:scale-100 transition-transform duration-500"></div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-3 text-gray-500 text-sm font-medium animate-bounce">
                        <span>Scroll for more features</span>
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}