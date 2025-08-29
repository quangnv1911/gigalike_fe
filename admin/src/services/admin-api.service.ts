import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isActive: boolean;
}

export interface Order {
  id: number;
  userId: number;
  products: { productId: number; quantity: number; price: number }[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  revenue: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env['NG_APP_API_URL'] || 'https://fakestoreapi.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('adminToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('adminToken');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Dashboard
  async getDashboardStats(): Promise<DashboardStats> {
    // Mock data for demo
    return {
      totalProducts: 1234,
      totalUsers: 8901,
      totalOrders: 567,
      revenue: 45200
    };
  }

  // Products
  async getProducts(): Promise<Product[]> {
    const response = await this.api.get('/products');
    return response.data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      inStock: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
  }

  async getProduct(id: number): Promise<Product> {
    const response = await this.api.get(`/products/${id}`);
    const item = response.data;
    return {
      id: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      inStock: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const response = await this.api.post('/products', product);
    return response.data;
  }

  async updateProduct(id: number, product: Partial<Product>): Promise<Product> {
    const response = await this.api.put(`/products/${id}`, product);
    return response.data;
  }

  async deleteProduct(id: number): Promise<void> {
    await this.api.delete(`/products/${id}`);
  }

  // Users (Mock data)
  async getUsers(): Promise<User[]> {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'customer',
        createdAt: '2025-01-01',
        isActive: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'admin',
        createdAt: '2025-01-02',
        isActive: true,
      }
    ];
  }

  // Orders (Mock data)
  async getOrders(): Promise<Order[]> {
    return [
      {
        id: 1,
        userId: 1,
        products: [{ productId: 1, quantity: 2, price: 29.99 }],
        total: 59.98,
        status: 'completed',
        createdAt: '2025-01-15',
      }
    ];
  }
}
