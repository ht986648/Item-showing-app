
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  additionalImages: string[];
  createdAt: Date;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, 'id' | 'createdAt'>) => void;
  getItem: (id: string) => Item | undefined;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};

const STORAGE_KEY = 'item-showcase-items';

// Static initial items for demonstration
const initialItems: Item[] = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    type: 'Shirt',
    description: 'A comfortable and versatile cotton t-shirt perfect for everyday wear. Made from 100% organic cotton with a relaxed fit.',
    coverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500&h=500&fit=crop'
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Denim Jeans',
    type: 'Pant',
    description: 'Premium quality denim jeans with a modern slim fit. Features classic five-pocket styling and durable construction.',
    coverImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506629905057-f39b5b0d0b2b?w=500&h=500&fit=crop'
    ],
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    name: 'Running Sneakers',
    type: 'Shoes',
    description: 'High-performance running shoes with advanced cushioning technology. Perfect for daily runs and athletic activities.',
    coverImage: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1552346989-e069318e20a5?w=500&h=500&fit=crop'
    ],
    createdAt: new Date('2024-01-05')
  },
  {
    id: '4',
    name: 'Yoga Mat',
    type: 'Sports Gear',
    description: 'Premium non-slip yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and fitness exercises.',
    coverImage: 'https://images.unsplash.com/photo-1506629905057-f39b5b0d0b2b?w=500&h=500&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1506629905057-f39b5b0d0b2b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
    ],
    createdAt: new Date('2024-01-01')
  }
];

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems).map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        }));
        setItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        setItems(initialItems);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialItems));
      }
    } else {
      setItems(initialItems);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialItems));
    }
  }, []);

  const addItem = (newItem: Omit<Item, 'id' | 'createdAt'>) => {
    const item: Item = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    const updatedItems = [item, ...items];
    setItems(updatedItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const getItem = (id: string) => {
    return items.find(item => item.id === id);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, getItem }}>
      {children}
    </ItemContext.Provider>
  );
};
