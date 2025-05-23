import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/blog"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>

        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;