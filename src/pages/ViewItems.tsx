
import { useState } from 'react';
import { useItems } from '@/context/ItemContext';
import Navigation from '@/components/Navigation';
import ItemCard from '@/components/ItemCard';
import ItemDetailModal from '@/components/ItemDetailModal';
import { Item } from '@/context/ItemContext';

const ViewItems = () => {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">View Items</h1>
          <p className="text-gray-600">
            Browse through our collection of {items.length} amazing items
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found. Add some items to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <ItemCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}

        {selectedItem && (
          <ItemDetailModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ViewItems;
