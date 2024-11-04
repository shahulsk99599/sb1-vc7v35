import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Understanding Diabetes: Symptoms and Prevention',
    excerpt: 'Learn about the early warning signs of diabetes and how to prevent it through lifestyle changes.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Health Tips',
    author: 'Dr. Sarah Johnson',
    date: 'Mar 16, 2024',
  },
  {
    id: 2,
    title: 'Mental Health in the Digital Age',
    excerpt: 'Exploring the impact of technology on mental health and strategies for digital wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Mental Health',
    author: 'Dr. Michael Chen',
    date: 'Mar 15, 2024',
  },
  {
    id: 3,
    title: 'Heart Health: Diet and Exercise',
    excerpt: 'A comprehensive guide to maintaining cardiovascular health through proper nutrition and exercise.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Lifestyle',
    author: 'Dr. Emily White',
    date: 'Mar 14, 2024',
  },
];

export function BlogSection() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Health Articles
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay informed with the latest health news and expert advice
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start overflow-hidden rounded-lg shadow-lg"
            >
              <div className="w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-600">
                    {post.category}
                  </p>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link to={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="text-sm font-semibold leading-6 text-rose-600 hover:text-rose-500"
          >
            View all articles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}