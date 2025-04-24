import React from "react";
import { Link } from "react-router-dom";

const testPrepClasses = [
  { 
    name: 'PTE Class', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    link: '/services/pte'
  },
  { 
    name: 'TOEFL Class', 
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60',
    link: '/services/toefl'
  },
  { 
    name: 'IELTS Class', 
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60',
    link: '/services/ielts'
  },
  { 
    name: 'GRE Class', 
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=60',
    link: '/services/gre'
  },
  { 
    name: 'SAT Class', 
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&auto=format&fit=crop&q=60',
    link: '/services/sat'
  },
  { 
    name: 'GMAT Class', 
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    link: '/services/gmat'
  }
];

const PreparationClass = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}

        
        {/* Hero Content */}
        <section className="relative h-[500px] overflow-hidden"> {/* Increased height from 300px to 500px */}
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ 
            backgroundImage: "url('/h3.png')", // Make sure to save the image in this location
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2"> Preparation class</h1> {/* Increased text size */}
          <div className="flex items-center gap-2 text-base"> {/* Increased text size */}
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <span className="text-orange-500">Test preparation</span>
          </div>
        </div>

        {/* Angled Overlay */}
        <div className="absolute -bottom-1 left-0 right-0"> {/* Added negative bottom to prevent white line */}
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 160L1440 160L1440 60L720 130L0 60L0 160Z" 
              fill="blue"
            />
            <path 
              d="M0 160L1440 160L1440 80L720 160L0 80L0 160Z" 
              fill="#ff6b00"
            />
          </svg>
        </div>
      </section>


      {/* Classes Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">
              Our Classes
            </p>
            <h2 className="text-3xl font-bold text-[#1f2b6c]">
              Test Preparation Classes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testPrepClasses.map((item, index) => (
              <Link to={item.link} key={index} className="group relative">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1f2b6c] opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white py-3 px-6 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-[#1f2b6c]">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreparationClass;
