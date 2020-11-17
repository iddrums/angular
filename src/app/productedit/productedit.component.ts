import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProductEditComponent implements OnInit {
  isLoading = false;
  error: string = null;
  productID: any;
  productData: any;

  constructor(private prodService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this. productID = this.actRoute.snapshot.params['id'];
    this.currentProduct(this.productID);
  }

  currentProduct(productID){
    this.prodService.getAProduct(productID).subscribe(
      product => {
      this.productData = product;
    });
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const title = form.value.productTitle;
    const description = form.value.description;
    const imagePath = form.value.imagePath;
    const price = form.value.price;

    this.isLoading = true;
    this.prodService.updateProduct(title, description, imagePath, price,  this.productID).subscribe(
      resData => {
        this.router.navigate([`/products/${this.productID}`]);
        // this.isLoading = false;
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
