import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
      title: 'Inaugural Ceremony',
      year: '2022'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
      title: 'Education Fair',
      year: '2022'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60',
      title: 'Aspire Global Counseling Fair',
      year: '2021'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&auto=format&fit=crop&q=60',
      title: 'Aspire Global Education Seminar',
      year: '2022'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60',
      title: 'Aspire Global Education Fair',
      year: '2020'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
      title: 'Aspire Counseling Services',
      year: '2023'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=60',
      title: 'CEO Address',
      year: '2023'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&auto=format&fit=crop&q=60',
      title: '12th Anniversary',
      year: '2022'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60',
      title: 'USA Visit on 12th March',
      year: '2019'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
      title: 'IELTS Preparation Workshop',
      year: '2023'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
      title: 'Student Group Discussion',
      year: '2022'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1559644704-0d1d8e8c15ca?w=800&auto=format&fit=crop&q=60',
      title: 'Graduation Ceremony',
      year: '2023'
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}
      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">Gallery</h1>
          <div className="flex items-center gap-2 text-base">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Gallery</span>
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

      {/* Gallery Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#ff6b00] text-sm font-medium mb-2">Our Photo Gallery</p>
            <h2 className="text-[#1f2b6c] text-3xl font-bold">Our Gallery</h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.year && <p className="text-sm opacity-90">{item.year}</p>}
                  </div>
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

export default Gallery;
