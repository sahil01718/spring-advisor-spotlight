
import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  author: string;
}

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-[#FCFFFE] hover:shadow-md transition-shadow">
      {post.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5 flex-grow">
        <p className="text-sm text-gray-500 mb-1">{post.date}</p>
        <h3 className="text-lg font-semibold mb-2">
          <Link to={`/blogs/${post.slug}`} className="hover:text-[#108E66]">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
        <div className="mt-auto">
          <Link 
            to={`/blogs/${post.slug}`} 
            className="text-[#108E66] text-sm font-medium hover:underline"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
