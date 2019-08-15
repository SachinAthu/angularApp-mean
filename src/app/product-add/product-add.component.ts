import { Component, OnInit } from '@angular/core';
import { ProductGetComponent } from '../product-get/product-get.component';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  addProduct(form: NgForm) {
    //console.log(form.value.pName);
    this.productsService.addProduct(form.value.pName, form.value.pDescription, form.value.pPrice);
  }

}
