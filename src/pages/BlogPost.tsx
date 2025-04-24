import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or database
  const post = {
    id: id,
    title: 'Free Online Courses From Top Universities',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    date: { day: '11th', month: 'Jan', year: '2023' },
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pellentesque felis nec integer. Non curabitur habitasse sapien risus accumsan sed mauris. Leo ornare rutrum ut ligula vulputate. Vulputate ut integer ut ipsum proin habitant neque.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      
      <h3>The Benefits of Online Learning</h3>
      
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      
      <ul>
        <li>Flexible schedule and environment</li>
        <li>Lower costs and debts</li>
        <li>Self-discipline and responsibility</li>
        <li>More choice of course topics</li>
      </ul>
      
      <h3>Top Universities Offering Free Courses</h3>
      
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      
      <ol>
        <li>Harvard University</li>
        <li>Massachusetts Institute of Technology (MIT)</li>
        <li>Stanford University</li>
        <li>University of Oxford</li>
        <li>Yale University</li>
      </ol>
      
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    `,
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
      role: 'Education Consultant'
    },
    categories: ['Education', 'Study', 'Counseling', 'Abroad', 'Malta', 'Aspire', 'Reference'],
    tags: ['Online Learning', 'Free Courses', 'Education', 'University', 'E-Learning']
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center px-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-base">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-orange-500">Blog</Link>
            <span>/</span>
            <span className="text-orange-500">Free online courses from top universities</span>
          </div>
        </div>

        {/* Angled Overlay */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 160L1440 160L1440 60L720 130L0 60L0 160Z"
              fill="#1f2b6c"
            />
            <path
              d="M0 160L1440 160L1440 80L720 160L0 80L0 160Z"
              fill="#ff6b00"
            />
          </svg>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Post Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#1f2b6c]">{post.author.name}</h4>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm text-gray-500">{post.date.day} {post.date.month}, {post.date.year}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category, index) => (
                    <span key={index} className="text-xs text-gray-500">
                      {category}{index < post.categories.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-[#1f2b6c] mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#1f2b6c] hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Link 
                to="/blog" 
                className="px-6 py-2 bg-[#1f2b6c] text-white rounded-md hover:bg-[#2a3a8c] transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
              
              <div className="flex gap-2">
                <button className="p-2 bg-[#1f2b6c] text-white rounded-md hover:bg-[#2a3a8c] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="p-2 bg-[#1f2b6c] text-white rounded-md hover:bg-[#2a3a8c] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="p-2 bg-[#1f2b6c] text-white rounded-md hover:bg-[#2a3a8c] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
