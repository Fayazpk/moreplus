import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-600">About</span>{" "}
              <span className="text-gray-700">MorePlus</span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-8">
            {/* Company Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2018 in the vibrant city of Kariyad, Kannur, Kerala, MorePlus has been 
                dedicated to revolutionizing the cleaning industry with innovative, high-quality solutions. 
                Our journey began with a simple vision: to create cleaning products that combine effectiveness 
                with environmental responsibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the visionary leadership of our founder <span className="font-semibold text-gray-800">Ismail</span>, 
                we have grown from a small local enterprise to a trusted name in household and industrial 
                cleaning solutions across Kerala and beyond.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To provide superior cleaning solutions that meet all household and industrial needs 
                  with unmatched effectiveness and care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To become the leading cleaning solutions provider in India, known for innovation, 
                  quality, and environmental responsibility.
                </p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">2018</div>
                  <div className="text-blue-100 text-sm">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">6+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-blue-100 text-sm">Quality Assured</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-600">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kariyad, Kannur, Kerala, India</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-100">
                  <Image 
                    src="/morepluslogo.png" 
                    alt="MorePlus Premium Cleaning Solutions" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-light text-blue-600 mb-1">more</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">plus</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at MorePlus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring every product meets the highest standards 
                of effectiveness and safety.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously developing new formulas and solutions to stay ahead of changing 
                customer needs and industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers by understanding their needs 
                and exceeding their expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutCompany;