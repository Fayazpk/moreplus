import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-blue-600">About</span>{" "}
              <span className="text-gray-700">MorePlus</span>
            </h1>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Company Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Founded in 2018 in the vibrant city of Kariyad, Kannur, Kerala, MorePlus has been 
                dedicated to revolutionizing the cleaning industry with innovative, high-quality solutions.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Under the visionary leadership of our founder <span className="font-semibold text-gray-800">Ismail</span>, 
                we have grown from a small local enterprise to a trusted name in cleaning solutions 
                across Kerala and beyond.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Our Mission</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  To provide superior cleaning solutions that meet all household and industrial needs.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Our Vision</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  To become the leading cleaning solutions provider in India, known for innovation and quality.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-6 text-white">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-lg sm:text-2xl font-bold mb-1">2018</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Founded</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold mb-1">6+</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Years</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold mb-1">100%</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Quality</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kariyad, Kannur, Kerala, India</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100">
                <Image 
                  src="/morepluslogo.png" 
                  alt="MorePlus Premium Cleaning Solutions" 
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-light text-blue-600 mb-0.5 sm:mb-1">more</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">plus</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-blue-50 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              The principles that guide everything we do at MorePlus
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Quality First", desc: "We never compromise on quality, ensuring every product meets the highest standards." },
              { title: "Innovation", desc: "Continuously developing new solutions to meet customer needs." },
              { title: "Customer Care", desc: "Building lasting relationships by exceeding expectations." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
