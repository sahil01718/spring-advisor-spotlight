
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

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
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      {post.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <p className="text-sm text-gray-500">{post.date}</p>
        <h3 className="text-lg font-semibold">
          <Link to={`/blogs/${post.slug}`} className="hover:text-[#108E66]">
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/blogs/${post.slug}`} 
          className="text-[#108E66] text-sm font-medium hover:underline"
        >
          Read more &rarr;
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;
