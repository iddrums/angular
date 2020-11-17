import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class NewComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(private prodService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const title = form.value.title;
    const description = form.value.description;
    const imagePath = form.value.imagePath;
    const price = form.value.price;

    this.isLoading = true;
    this.prodService.createProduct(title, description, imagePath, price).subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }

}

