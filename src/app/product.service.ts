import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor() { }

  // Fetch products endpoint "https://fakestoreapi.com/products" using Fetch API
  async getProducts(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
}
