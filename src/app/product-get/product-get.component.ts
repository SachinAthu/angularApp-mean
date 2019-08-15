import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Product from '../models/products';

@Component({
  selector: 'product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        console.log(this.products);
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}
