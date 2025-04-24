import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
      date: { day: '11th', month: 'Jan' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 2,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60',
      date: { day: '15th', month: 'Feb' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 3,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
      date: { day: '20th', month: 'Mar' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 4,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60',
      date: { day: '5th', month: 'Apr' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 5,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60',
      date: { day: '10th', month: 'May' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 6,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
      date: { day: '18th', month: 'Jun' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 7,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60',
      date: { day: '22nd', month: 'Jul' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 8,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
      date: { day: '30th', month: 'Aug' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    },
    {
      id: 9,
      title: 'Free Online Courses From Top Universities.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60',
      date: { day: '2nd', month: 'Sep' },
      excerpt: 'Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque',
      categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: "url('/h3.png')",
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">Blog</h1>
          <div className="flex items-center gap-2 text-base">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Blog</span>
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

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#344bd3] text-sm font-medium mb-2">Latest Blog</p>
            <h2 className="text-[#3247bd] text-3xl font-bold">Have a Look Our Blog</h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-[#ff6b00] text-white rounded-full p-3 text-center min-w-[60px]">
                      <div className="text-sm font-semibold">{post.date.day}</div>
                      <div className="text-xs">{post.date.month}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#1f2b6c] font-bold text-lg mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.categories.map((category, index) => (
                      <span key={index} className="text-xs text-gray-500">
                        {category}{index < post.categories.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b00] text-white hover:bg-[#e05f00] transition-colors"
                  >
                    <span className="sr-only">Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="py-2 px-4 bg-[#1f2b6c] text-white font-medium rounded-l-md hover:bg-[#2a3a8c] transition-colors">
                &laquo;
              </a>
              <a href="#" className="py-2 px-4 bg-[#1f2b6c] text-white font-medium hover:bg-[#2a3a8c] transition-colors">
                1
              </a>
              <a href="#" className="py-2 px-4 bg-white text-[#1f2b6c] font-medium hover:bg-gray-50 transition-colors">
                2
              </a>
              <a href="#" className="py-2 px-4 bg-white text-[#1f2b6c] font-medium hover:bg-gray-50 transition-colors">
                3
              </a>
              <a href="#" className="py-2 px-4 bg-white text-[#1f2b6c] font-medium hover:bg-gray-50 transition-colors">
                4
              </a>
              <a href="#" className="py-2 px-4 bg-white text-[#1f2b6c] font-medium hover:bg-gray-50 transition-colors">
                5
              </a>
              <a href="#" className="py-2 px-4 bg-white text-[#1f2b6c] font-medium rounded-r-md hover:bg-gray-50 transition-colors">
                &raquo;
              </a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
