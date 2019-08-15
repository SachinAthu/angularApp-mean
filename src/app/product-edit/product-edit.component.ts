import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.editProduct(params['id']).subscribe(res => {
        this.product = res;
    });
  });
  }

  updateProduct(form){
    this.route.params.subscribe(params => {
      this.productService.updateProduct(form.value.pName, form.value.pDescription, form.value.pPrice, params.id);
      this.router.navigate(['products']);
    });
  }

}
