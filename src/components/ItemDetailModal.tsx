
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Item } from '@/context/ItemContext';
import { toast } from '@/hooks/use-toast';

interface ItemDetailModalProps {
  item: Item;
  onClose: () => void;
}

const ItemDetailModal = ({ item, onClose }: ItemDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = item.additionalImages.length > 0 ? item.additionalImages : [item.coverImage];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleEnquire = () => {
    // Simulate sending an email inquiry
    toast({
      title: "Enquiry Sent!",
      description: `Your enquiry about "${item.name}" has been sent to our team. We'll get back to you soon!`,
      className: "bg-green-50 border-green-200"
    });
    console.log(`Enquiry sent for item: ${item.name}`);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{item.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={images[currentImageIndex]}
                alt={`${item.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=500&fit=crop';
                }}
              />
              
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex space-x-2 justify-center">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                {item.type}
              </Badge>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Item Type:</span>
                  <span>{item.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Added:</span>
                  <span>{item.createdAt.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Images:</span>
                  <span>{images.length} image{images.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleEnquire}
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
