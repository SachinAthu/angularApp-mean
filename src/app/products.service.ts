import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  // get products
  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  // add products
  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(JSON.stringify(obj));
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log(res));
  }

  // get the selected product for edit
  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteProduct(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }


}
