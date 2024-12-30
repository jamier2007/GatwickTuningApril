import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';

// Import all markdown files
import unlockingPotential from '../blog/unlocking-vehicle-potential.md?url';
import realExperiences from '../blog/real-life-experiences.md?url';
import ultimateGuide from '../blog/ultimate-guide.md?url';
import dieselIssues from '../blog/common-diesel-issues.md?url';
import performanceGuide from '../blog/performance-tuning-guide.md?url';
import mythsFacts from '../blog/myths-and-facts.md?url';
import maintenanceTips from '../blog/maintenance-tips.md?url';
import choosingService from '../blog/choosing-tuning-service.md?url';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        let postUrl;
        switch (slug) {
          case 'unlocking-vehicle-potential':
            postUrl = unlockingPotential;
            break;
          case 'real-life-experiences':
            postUrl = realExperiences;
            break;
          case 'ultimate-guide':
            postUrl = ultimateGuide;
            break;
          case 'common-diesel-issues':
            postUrl = dieselIssues;
            break;
          case 'performance-tuning-guide':
            postUrl = performanceGuide;
            break;
          case 'myths-and-facts':
            postUrl = mythsFacts;
            break;
          case 'maintenance-tips':
            postUrl = maintenanceTips;
            break;
          case 'choosing-tuning-service':
            postUrl = choosingService;
            break;
          default:
            throw new Error('Blog post not found');
        }

        const response = await fetch(postUrl);
        if (!response.ok) {
          throw new Error('Failed to load blog post');
        }
        const content = await response.text();
        setPost(content);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Blog post not found');
      }
    };

    loadPost();
  }, [slug]);

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog" className="mt-4 inline-block text-secondary hover:text-blue-600">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Extract title from the first line of markdown
  const title = post.split('\n')[0].replace('# ', '');

  return (
    <>
      <Helmet>
        <title>{title} | Gatwick Tuning</title>
        <meta name="description" content={post.split('\n').find(line => line.startsWith('*Published'))?.replace('*', '')} />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/blog" className="inline-block mb-8 text-secondary hover:text-blue-600">
            ← Back to Blog
          </Link>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-secondary hover:prose-a:text-blue-600">
            <ReactMarkdown>{post}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/blog" className="inline-flex items-center text-secondary hover:text-blue-600">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
