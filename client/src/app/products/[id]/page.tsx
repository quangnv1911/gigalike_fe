import { notFound } from 'next/navigation';
import Image from 'next/image';
import { productService } from '@/services/api';
import { ProductActions } from '@/components/product-actions';
import { Card, CardContent } from '@/components/ui/card';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

// This generates static paths for better performance
export async function generateStaticParams() {
  try {
    const products = await productService.getProducts();
    return products.slice(0, 10).map(product => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    notFound();
  }

  let product;
  try {
    product = await productService.getProduct(productId);
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-sm text-gray-600 capitalize mb-4">
              {product.category}
            </p>
            <p className="text-3xl font-bold text-primary mb-6">
              ${product.price}
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm ${
                  product.inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <ProductActions product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
