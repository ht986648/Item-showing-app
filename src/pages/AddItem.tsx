
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '@/context/ItemContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';

const AddItem = () => {
  const { addItem } = useItems();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: ['']
  });

  const itemTypes = [
    'Shirt',
    'Pant',
    'Shoes',
    'Sports Gear',
    'Accessories',
    'Electronics',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAdditionalImageChange = (index: number, value: string) => {
    const newImages = [...formData.additionalImages];
    newImages[index] = value;
    setFormData(prev => ({
      ...prev,
      additionalImages: newImages
    }));
  };

  const addAdditionalImageField = () => {
    setFormData(prev => ({
      ...prev,
      additionalImages: [...prev.additionalImages, '']
    }));
  };

  const removeAdditionalImageField = (index: number) => {
    if (formData.additionalImages.length > 1) {
      const newImages = formData.additionalImages.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        additionalImages: newImages
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.type || !formData.description || !formData.coverImage) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const additionalImages = formData.additionalImages.filter(img => img.trim() !== '');
      
      addItem({
        name: formData.name,
        type: formData.type,
        description: formData.description,
        coverImage: formData.coverImage,
        additionalImages: additionalImages.length > 0 ? additionalImages : [formData.coverImage]
      });

      toast({
        title: "Success!",
        description: "Item successfully added",
        className: "bg-green-50 border-green-200"
      });

      // Reset form
      setFormData({
        name: '',
        type: '',
        description: '',
        coverImage: '',
        additionalImages: ['']
      });

      // Navigate to view items after a short delay
      setTimeout(() => {
        navigate('/view-items');
      }, 1500);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Item</h1>
          <p className="text-gray-600">Fill in the details below to add a new item to your collection</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Item Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter item name"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="type" className="text-sm font-medium">Item Type *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    {itemTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium">Item Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe the item in detail"
                  className="mt-1 min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="coverImage" className="text-sm font-medium">Cover Image URL *</Label>
                <Input
                  id="coverImage"
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) => handleInputChange('coverImage', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label className="text-sm font-medium">Additional Images</Label>
                <div className="space-y-3 mt-2">
                  {formData.additionalImages.map((image, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        type="url"
                        value={image}
                        onChange={(e) => handleAdditionalImageChange(index, e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                      {formData.additionalImages.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeAdditionalImageField(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addAdditionalImageField}
                    className="flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Another Image
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Adding Item...' : 'Add Item'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddItem;
