'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, ShoppingCart, Minus, Plus } from 'lucide-react';
import { Product, useProductStore } from '@/stores/use-product-store';

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addToCart, addToFavorites, removeFromFavorites, favorites } =
    useProductStore();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    addToCart(product.id, quantity);
    setTimeout(() => setIsAddingToCart(false), 500);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <span className="font-medium">Quantity:</span>
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center border-0 focus:ring-0"
            min="1"
          />
          <Button variant="ghost" size="sm" onClick={incrementQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button
          className="flex-1"
          onClick={handleAddToCart}
          disabled={isAddingToCart || !product.inStock}
          size="lg"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          {isAddingToCart
            ? 'Adding to Cart...'
            : !product.inStock
            ? 'Out of Stock'
            : 'Add to Cart'}
        </Button>

        <Button
          variant={isFavorite ? 'default' : 'outline'}
          onClick={handleToggleFavorite}
          size="lg"
          className="px-6"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
      </div>
    </div>
  );
}
