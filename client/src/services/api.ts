import axios from 'axios';
import { Product } from '@/stores/use-product-store';

// Create axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  config => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const productService = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      inStock: true,
    }));
  },

  // Get single product
  getProduct: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    const item = response.data;
    return {
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      inStock: true,
    };
  },

  // Get products by category
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`);
    return response.data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      inStock: true,
    }));
  },

  // Get categories
  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/products/categories');
    return response.data;
  },
};

export default api;
