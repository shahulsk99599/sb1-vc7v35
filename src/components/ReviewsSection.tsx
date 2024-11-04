import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    rating: 5,
    content: 'Excellent service! The doctor was very professional and caring. The appointment booking process was smooth.',
    author: 'Sarah Mitchell',
    date: 'March 15, 2024',
  },
  {
    id: 2,
    rating: 4,
    content: 'Very convenient medicine delivery service. Saved me a lot of time searching for medicines.',
    author: 'John Anderson',
    date: 'March 14, 2024',
  },
  {
    id: 3,
    rating: 5,
    content: 'The free health camp was incredibly helpful. Thank you for organizing such important community services.',
    author: 'Maria Garcia',
    date: 'March 13, 2024',
  },
];

export function ReviewsSection() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Read reviews from our satisfied patients
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {review.content}
                </p>
              </div>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-base font-semibold text-gray-900">
                  {review.author}
                </p>
                <p className="mt-1 text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-md bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500"
          >
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}