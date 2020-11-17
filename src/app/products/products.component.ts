import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/product.service';
import { Store } from '@ngrx/store';

import * as cartActions from '../cart/store/cart.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any = [];

  constructor(private prodService: ProductsService, private store: Store,  private route: ActivatedRoute,   private router: Router,) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.prodService.getProducts().subscribe(
        productData => {

        for (const key in productData) {
          this.products.push({...productData[key], id: key });
        }
      }
    );
  }

  // addCart() {
  //   alert('Product goes to cart');
  // }

  onNewProduct() {
    this.router.navigate(['/add-product'], {relativeTo: this.route });
  }

  addProductToCart(dispacthedProduct){
    this.store.dispatch(new cartActions.AddToCart(dispacthedProduct));
  }

}
