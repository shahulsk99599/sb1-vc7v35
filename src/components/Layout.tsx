import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Heart, Menu, Search, User, X } from 'lucide-react';
import { useAuthStore } from '../lib/store';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const navigation = [
    { name: 'Find Doctors', href: '/doctors' },
    { name: 'Medicines', href: '/medicines' },
    { name: 'Health Blog', href: '/blog' },
    { name: 'Free Services', href: '/services' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-rose-600" />
                <span className="text-xl font-bold text-gray-900">HealthCare</span>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium ${
                    location.pathname === item.href
                      ? 'text-rose-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="rounded-full p-1 text-gray-400 hover:text-gray-500"
              >
                <Search className="h-6 w-6" />
              </button>

              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-1 text-sm font-medium text-gray-700"
                  >
                    <User className="h-5 w-5" />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500"
                >
                  Sign in
                </Link>
              )}

              <button
                type="button"
                className="md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} HealthCare Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}