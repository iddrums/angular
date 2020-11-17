import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from './products.model';

interface ProductResponseData {
  title: string;
  description: string;
  imagePath: string;
  price: number;
  productId: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  public  userData  = JSON.parse(localStorage.getItem('userData'));

  productSelected: any;
  products: Product[];
  productsChanged: any;

  constructor(private http: HttpClient) {}

  createProduct(title: string, description: string, imagePath: string, price: number,) {
    return this.http
      .post<ProductResponseData>(
        `https://mytest-324a9.firebaseio.com/products.json?auth=${this.userData.id}`,
        {
          title,
          description,
          imagePath,
          price,
          ownerId: this.userData._token
        }
      )
      .pipe(
        catchError(errorRes => {
          const errorMessage = 'An error occurred!';
          return throwError(errorMessage);
        })
      );
  }

  getProducts() {
    return this.http
      .get<ProductResponseData>(
        'https://mytest-324a9.firebaseio.com/products.json')
      .pipe(
        catchError(errorRes => {
          const errorMessage = 'An error occurred!';
          return throwError(errorMessage);
        })
      );
  }

  getAProduct(productId: string) {
    return this.http
      .get<ProductResponseData>(
        `https://mytest-324a9.firebaseio.com/products/${productId}.json`)
      .pipe(
        catchError(errorRes => {
          const errorMessage = 'An error occurred!';
          return throwError(errorMessage);
        })
      );
  }

  updateProduct(title: string, description: string, imagePath: string,  price: number, productId: string) {
    return this.http
      .patch<ProductResponseData>(
        `https://mytest-324a9.firebaseio.com//products/${productId}.json?auth=${this.userData.id}`,
          {
            title,
            description,
            imagePath,
            price,
          }
        )
      .pipe(
        catchError(errorRes => {
          const errorMessage = 'An error occurred!';
          return throwError(errorMessage);
        })
      );
  }

  deleteProduct(productId: string) {
    return this.http
      .delete<ProductResponseData>(
        `https://mytest-324a9.firebaseio.com/products/${productId}.json?auth=${this.userData.id}`)
      .pipe(
        catchError(errorRes => {
          const errorMessage = 'An error occurred!';
          return throwError(errorMessage);
        })
      );
  }
}

