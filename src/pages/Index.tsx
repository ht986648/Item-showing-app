
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-blue-600">ItemShowcase</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your premier destination for managing and showcasing items. 
              Add new products, browse collections, and discover amazing items 
              with our intuitive and modern interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Link to="/view-items" className="flex items-center gap-2">
                  Browse Items
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                <Link to="/add-item">
                  Add New Item
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
