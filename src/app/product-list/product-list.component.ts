import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  sortedBy: string = '';

  // Inject the ProductService
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error fetching products', error);
    }
  }

  // Sort products by price
  sortByPrice(): void {
    this.products.sort((a, b) => a.price - b.price);
    this.sortedBy = 'price';
  }

  // Sort products by name
  sortByName(): void {
    this.products.sort((a, b) => a.title.localeCompare(b.title));
    this.sortedBy = 'name';
  }
}
