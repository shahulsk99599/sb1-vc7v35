import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Pill, 
  Stethoscope, 
  Search, 
  HeartPulse, 
  MoreHorizontal 
} from 'lucide-react';

const categories = [
  {
    name: 'Find Hospitals',
    description: 'Search nearby hospitals',
    icon: Building2,
    href: '/hospitals',
    color: 'bg-blue-500',
  },
  {
    name: 'Quick Medicine',
    description: 'Order medicines online',
    icon: Pill,
    href: '/medicines',
    color: 'bg-green-500',
  },
  {
    name: 'Quick Doctor',
    description: 'Instant doctor consultation',
    icon: Stethoscope,
    href: '/quick-consult',
    color: 'bg-purple-500',
  },
  {
    name: 'Search Medicine',
    description: 'Find medicines by location',
    icon: Search,
    href: '/medicine-search',
    color: 'bg-yellow-500',
  },
  {
    name: 'Free Medical Camp',
    description: 'Join our health camps',
    icon: HeartPulse,
    href: '/services/camp',
    color: 'bg-rose-500',
  },
  {
    name: 'More Services',
    description: 'Explore all services',
    icon: MoreHorizontal,
    href: '/services',
    color: 'bg-gray-500',
  },
];

export function ServiceCategories() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive healthcare services designed for your needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="relative flex flex-col overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl"
            >
              <div className={`${category.color} p-6`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}