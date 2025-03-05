import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from './SEO';

// Import all markdown files
import unlockingPotential from '../blog/unlocking-vehicle-potential.md?url';
import realExperiences from '../blog/real-life-experiences.md?url';
import ultimateGuide from '../blog/ultimate-guide.md?url';
import dieselIssues from '../blog/common-diesel-issues.md?url';
import performanceGuide from '../blog/performance-tuning-guide.md?url';
import mythsFacts from '../blog/myths-and-facts.md?url';
import maintenanceTips from '../blog/maintenance-tips.md?url';
import choosingService from '../blog/choosing-tuning-service.md?url';

// Blog post metadata for SEO
const blogMetadata = {
  'unlocking-vehicle-potential': {
    title: 'Unlocking Your Vehicle\'s Potential | Gatwick Tuning',
    description: 'Discover how ECU remapping can unlock your vehicle\'s hidden potential. Learn about performance gains, fuel efficiency improvements, and more.',
    keywords: 'vehicle potential, ECU remapping benefits, performance gains, fuel efficiency, engine tuning',
    imageUrl: '/blog/unlocking-potential.jpg'
  },
  'real-life-experiences': {
    title: 'Real-Life Experiences with ECU Remapping | Gatwick Tuning',
    description: 'Read real customer experiences with our ECU remapping services. Discover the tangible benefits and improvements our clients have experienced.',
    keywords: 'ECU remapping testimonials, customer experiences, tuning results, performance improvements',
    imageUrl: '/blog/real-experiences.jpg'
  },
  'ultimate-guide': {
    title: 'Ultimate Guide to ECU Remapping | Gatwick Tuning',
    description: 'The complete guide to ECU remapping. Learn what it is, how it works, benefits, considerations, and why choose Gatwick Tuning for your vehicle.',
    keywords: 'ECU remapping guide, how ECU remapping works, remapping benefits, tuning considerations',
    imageUrl: '/blog/ultimate-guide.jpg'
  },
  'common-diesel-issues': {
    title: 'Common Diesel Engine Issues & Solutions | Gatwick Tuning',
    description: 'Learn about common diesel engine issues and how ECU remapping can help resolve them. Expert advice from Gatwick Tuning specialists.',
    keywords: 'diesel engine problems, DPF issues, EGR problems, diesel tuning solutions',
    imageUrl: '/blog/diesel-issues.jpg'
  },
  'performance-tuning-guide': {
    title: 'Performance Tuning Guide | Gatwick Tuning',
    description: 'Comprehensive guide to vehicle performance tuning. Understand different stages, benefits, and what to expect from professional tuning services.',
    keywords: 'performance tuning guide, stage 1 tuning, stage 2 tuning, vehicle performance enhancement',
    imageUrl: '/blog/performance-guide.jpg'
  },
  'myths-and-facts': {
    title: 'ECU Remapping: Myths vs Facts | Gatwick Tuning',
    description: 'Separating myths from facts about ECU remapping. Get accurate information about vehicle tuning from Gatwick Tuning experts.',
    keywords: 'ECU remapping myths, tuning misconceptions, remapping facts, tuning truth',
    imageUrl: '/blog/myths-facts.jpg'
  },
  'maintenance-tips': {
    title: 'Vehicle Maintenance Tips After Tuning | Gatwick Tuning',
    description: 'Essential maintenance tips for tuned vehicles. Learn how to care for your vehicle after ECU remapping to ensure optimal performance.',
    keywords: 'tuned vehicle maintenance, post-remapping care, tuning aftercare, performance maintenance',
    imageUrl: '/blog/maintenance-tips.jpg'
  },
  'choosing-tuning-service': {
    title: 'How to Choose the Right Tuning Service | Gatwick Tuning',
    description: 'Guide to choosing the right vehicle tuning service. Learn what to look for, questions to ask, and why Gatwick Tuning is the preferred choice.',
    keywords: 'choosing tuning service, best ECU remapping, tuning company selection, quality remapping',
    imageUrl: '/blog/choosing-service.jpg'
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [postTitle, setPostTitle] = useState('');

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

  // Create schema for the blog post
  const createBlogPostSchema = () => {
    if (!post || !slug || !blogMetadata[slug]) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogMetadata[slug].title,
      "description": blogMetadata[slug].description,
      "image": `https://www.gatwicktuning.com${blogMetadata[slug].imageUrl}`,
      "author": {
        "@type": "Organization",
        "name": "Gatwick Tuning"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gatwick Tuning",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gatwicktuning.com/logo.png"
        }
      },
      "datePublished": "2023-12-29",
      "dateModified": "2023-12-29",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.gatwicktuning.com/blog/${slug}`
      }
    };
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {post && slug && blogMetadata[slug] ? (
        <SEO 
          title={blogMetadata[slug].title}
          description={blogMetadata[slug].description}
          keywords={blogMetadata[slug].keywords}
          path={`/blog/${slug}`}
          imageUrl={blogMetadata[slug].imageUrl}
          imageAlt={`${blogMetadata[slug].title} - Gatwick Tuning Blog`}
          schema={createBlogPostSchema()}
        />
      ) : (
        <SEO 
          title="Blog Post | Gatwick Tuning"
          description="Read our latest blog posts about vehicle tuning, ECU remapping, and performance enhancement."
          path={`/blog/${slug || ''}`}
        />
      )}
      
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
    </div>
  );
};

export default BlogPost;
