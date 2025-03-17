export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  isPrime?: boolean;
  discount?: number;
  quantity?: number; // For cart functionality
}
