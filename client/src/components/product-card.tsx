'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product, useProductStore } from '@/stores/use-product-store';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToFavorites, removeFromFavorites, favorites } =
    useProductStore();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    addToCart(product.id);
    setTimeout(() => setIsAddingToCart(false), 500);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <Button
            size="sm"
            variant={isFavorite ? 'default' : 'outline'}
            className="absolute top-2 right-2"
            onClick={handleToggleFavorite}
          >
            <Heart
              className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-bold text-primary">${product.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={isAddingToCart || !product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isAddingToCart
            ? 'Adding...'
            : !product.inStock
            ? 'Out of Stock'
            : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
