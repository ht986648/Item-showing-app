
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Item } from '@/context/ItemContext';

interface ItemCardProps {
  item: Item;
  onClick: () => void;
}

const ItemCard = ({ item, onClick }: ItemCardProps) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={item.coverImage}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=500&fit=crop';
            }}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{item.name}</h3>
            <Badge variant="secondary" className="ml-2 shrink-0">
              {item.type}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
