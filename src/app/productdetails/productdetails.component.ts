import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products/product.service';
import { Store } from '@ngrx/store';

import * as cartActions from '../cart/store/cart.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductDetailComponent implements OnInit {
  productID: any;
  productData: any;

  constructor(private prodService: ProductsService, private actRoute: ActivatedRoute, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this. productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID){
    this.prodService.getAProduct(productID).subscribe(
      product => {
      this.productData = product;
      console.log('13838818', this.productData);
    });
  }

  onDeleteProduct(productID){
    this.prodService.deleteProduct(productID).subscribe(
      product => {
        this.router.navigate(['/products']);
    });
  }

  addCart(productData){
    alert('Product is on cart');
    const putId = { id: this.productID };
    const dispacthedProduct = {...productData, ...putId };
    this.store.dispatch(new cartActions.AddToCart(dispacthedProduct));
  }
}

