import { productService } from '@/services/api';
import { ProductCard } from '@/components/product-card';
import { Product } from '@/stores/use-product-store';

// This is a Server Component with SSR
export default async function ProductsPage() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await productService.getProducts();
  } catch (err) {
    error = 'Failed to load products';
    console.error('Error loading products:', err);
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
