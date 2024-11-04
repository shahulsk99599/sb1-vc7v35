import React from 'react';
import { X } from 'lucide-react';

export function PromotionBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-rose-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span>Free Health Checkup Camp! </span>
            <span className="hidden md:inline">Join us this weekend for comprehensive health screenings.</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="/services/camp" className="font-bold text-white underline">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-rose-500 focus:outline-none"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}