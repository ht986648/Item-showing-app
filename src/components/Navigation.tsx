
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/view-items', label: 'View Items' },
    { to: '/add-item', label: 'Add Item' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ItemShowcase
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.to
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
