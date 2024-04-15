import { User } from './user';

export interface Product {
  id?: number;
  description: string;
  imageUrl: string;
  price: number;
  rating?: number;
  creator?: User;
}