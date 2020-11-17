import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductsService,
               private router: Router,
               private route: ActivatedRoute ) {

               }

  ngOnInit(): void {
    // this.productService.productSelected
    //   .subscribe(
    //     (products: Product[]) => {
    //        this.products = products;
    //     }
    //   )
    // this.products = this.productService.getProducts();
  }

  onNewProduct() {
    this.router.navigate(['/add-product'], {relativeTo: this.route });
  }
}
