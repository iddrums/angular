import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ProductsService } from '../product.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product: Product;
@Input() index: number;


constructor(private productService: ProductsService,
  private route: ActivatedRoute,
  private router: Router,
  // private dataStorageService: DataStorageService
  ) {}
  ngOnInit(): void {
  }

  addCart(){
 alert('Check Product on Cart');
 this.router.navigate(['/cart'], {relativeTo: this.route});
  }
}
