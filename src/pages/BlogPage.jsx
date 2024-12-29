import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Understanding ECU Remapping",
      excerpt: "Learn about the benefits and process of ECU remapping for your vehicle.",
      date: "May 15, 2023",
      category: "Technical",
      readTime: "5 min read"
    },
    {
      title: "Stage 1 vs Stage 2 Tuning",
      excerpt: "Discover the differences between Stage 1 and Stage 2 tuning and which is right for you.",
      date: "May 10, 2023",
      category: "Guides",
      readTime: "4 min read"
    },
    {
      title: "Common Myths About Car Tuning",
      excerpt: "We debunk common myths and misconceptions about car tuning and ECU remapping.",
      date: "May 5, 2023",
      category: "Education",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Gatwick Tuning - ECU Remapping Insights & News</title>
        <meta name="description" content="Stay updated with the latest insights about ECU remapping, vehicle tuning, and automotive performance. Expert articles from Gatwick Tuning." />
        <link rel="canonical" href="https://www.gatwicktuning.com/blog" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="blog-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="blog-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Latest</span>
                <span className="block text-accent">News & Updates</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="bg-blue-100 text-secondary px-3 py-1 rounded-full">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Link to="#" className="text-secondary hover:text-blue-600 font-medium">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Learn More About Our Services?</h2>
              <p className="text-gray-600 mb-6">Contact our expert team today to discuss how we can enhance your vehicle's performance.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:01342621241" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 01342 621241
                </a>
                <a href="mailto:info@gatwicktuning.co.uk" className="inline-flex items-center px-6 py-3 border border-secondary rounded-md shadow-sm text-base font-medium text-secondary hover:bg-secondary hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
