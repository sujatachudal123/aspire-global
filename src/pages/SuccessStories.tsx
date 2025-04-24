import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories = () => {
  // Success stories data
  const successStories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
      name: 'John Smith',
      university: 'Harvard University',
      country: 'USA',
      course: 'MBA'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
      name: 'Sarah Johnson',
      university: 'Oxford University',
      country: 'UK',
      course: 'Computer Science'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60',
      name: 'Emily Chen',
      university: 'University of Toronto',
      country: 'Canada',
      course: 'Medicine'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
      name: 'Michael Brown',
      university: 'University of Melbourne',
      country: 'Australia',
      course: 'Engineering'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
      name: 'Jessica Lee',
      university: 'National University of Singapore',
      country: 'Singapore',
      course: 'Business Administration'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60',
      name: 'David Wilson',
      university: 'ETH Zurich',
      country: 'Switzerland',
      course: 'Physics'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
      name: 'Robert Taylor',
      university: 'Imperial College London',
      country: 'UK',
      course: 'Data Science'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60',
      name: 'Amanda Garcia',
      university: 'University of British Columbia',
      country: 'Canada',
      course: 'Environmental Science'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60',
      name: 'Jennifer Martinez',
      university: 'University of Sydney',
      country: 'Australia',
      course: 'Psychology'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60',
      name: 'Thomas Anderson',
      university: 'University of Amsterdam',
      country: 'Netherlands',
      course: 'International Relations'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&auto=format&fit=crop&q=60',
      name: 'Lisa Wang',
      university: 'University of Tokyo',
      country: 'Japan',
      course: 'Architecture'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60',
      name: 'James Rodriguez',
      university: 'Technical University of Munich',
      country: 'Germany',
      course: 'Mechanical Engineering'
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;
  const totalPages = Math.ceil(successStories.length / storiesPerPage);

  // Get current stories
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = successStories.slice(indexOfFirstStory, indexOfLastStory);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">Visa Granted</h1>
          <a href="/" className="hover:text-orange-500">Home / visa granted</a>
           
            
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

      {/* Success Stories Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#1f2b6c] text-3xl font-bold">Success Students</h2>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStories.map((story) => (
              <div key={story.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-[#1f2b6c]">{story.name}</h3>
                  <p className="text-gray-700">{story.university}</p>
                  <p className="text-gray-600">{story.country} | {story.course}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <button 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="py-2 px-4 bg-[#1f2b6c] text-white font-medium rounded-l-md hover:bg-[#2a3a8c] transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`py-2 px-4 font-medium transition-colors ${
                    currentPage === index + 1
                      ? 'bg-[#1f2b6c] text-white'
                      : 'bg-white text-[#1f2b6c] hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="py-2 px-4 bg-[#1f2b6c] text-white font-medium rounded-r-md hover:bg-[#2a3a8c] transition-colors disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
