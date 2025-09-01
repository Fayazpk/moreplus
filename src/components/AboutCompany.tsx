import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Hero Section with Personal Touch */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-blue-100/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Est. 2018 • Kannur, Kerala</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-800">Meet the Heart Behind</span><br/>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">MorePlus</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A story of passion, quality, and the relentless pursuit of cleaning excellence 
              from the coastal city of Kannur
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Story Section */}
        <div className="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Personal Story */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                    The Journey Begins
                  </h2>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100/50">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    In 2018, in the bustling streets of Kariyad, Kannur, a vision was born. 
                    <span className="font-semibold text-blue-600"> Ismail</span>, driven by a simple yet powerful belief - 
                    that every home and workplace deserves access to premium cleaning solutions 
                    without compromise.
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm sm:text-base">
                    "I saw families struggling with subpar cleaning products that promised much 
                    but delivered little. That's when I decided to create something different - 
                    something more."
                    <footer className="mt-2 text-blue-600 font-medium">— Ismail, Founder</footer>
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-xl border border-blue-100/50">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">6+</div>
                    <div className="text-gray-600 text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl border border-blue-100/50">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">1000+</div>
                    <div className="text-gray-600 text-sm">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Image & Visual Elements */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[350px] sm:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl">
                  <Image 
                    src="/morepluslogo.png" 
                    alt="MorePlus - Founded by Ismail in Kannur, Kerala" 
                    fill
                    className="object-contain p-8 sm:p-12"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-blue-100">
                  <div className="text-center">
                    <div className="text-blue-600 text-sm sm:text-base font-semibold">Kerala's Own</div>
                    <div className="text-gray-500 text-xs sm:text-sm">Cleaning Brand</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-sm font-medium">Kannur, Kerala</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-20 sm:w-28 h-20 sm:h-28 bg-blue-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision with Human Touch */}
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our purpose goes beyond business - it's about making life better, one clean space at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Mission */}
            <div className="group relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Our Heart</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To bring powerful, safe, and effective cleaning solutions to every Kerala household, 
                    because we believe every family deserves a spotless, healthy living environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Our Dream</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To become India's most trusted cleaning brand, known not just for quality products, 
                    but for genuinely caring about the families who use them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Our Journey So Far</h3>
              <p className="text-blue-100 text-sm sm:text-base">Milestones that mark our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold">2018</div>
                <div className="text-blue-100 text-xs sm:text-sm">Founded in Kannur</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold">15+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Product Range</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold">1000+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Happy Families</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold">100%</div>
                <div className="text-blue-100 text-xs sm:text-sm">Quality Promise</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section with Emotional Connection */}
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              These aren't just words on a wall - they're the principles we live by every single day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🏆",
                title: "Quality Without Compromise",
                desc: "Every product undergoes rigorous testing because your family's satisfaction is our responsibility.",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: "💡", 
                title: "Innovation with Purpose",
                desc: "We don't innovate just to be different - we create solutions that genuinely solve real problems.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "❤️",
                title: "Care Beyond Business",
                desc: "We treat every customer like family, because building relationships matters more than making sales.",
                color: "from-red-500 to-pink-500"
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center h-full">
                  <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 sm:py-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience the MorePlus Difference?
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied families across Kerala who have made the switch to quality cleaning solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;