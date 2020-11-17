// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams }  from '@angular/common/http';
// import { ProductService } from '../products/product.service';
// import { Product } from '../products/products.model';
// import { LoginService } from '../login/login.service';
// import { exhaustMap, map, take, tap } from 'rxjs/operators';


// @Injectable({providedIn: 'root' })
// export class DataStorageService {
//   createProduct(title: any, description: any, imagePath: any, price: any) {
//     throw new Error('Method not implemented.');
//   }
//   addIngredient(newIngredient: any) {
//     throw new Error('Method not implemented.');
//   }
//   constructor(
//       private http: HttpClient,
//       private productService: ProductService,
//       private loginService: LoginService
//       ) {}

//   storeProducts() {
//     const products = this.productService.getProducts();
//     this.http.post('https://mytest-324a9.firebaseio.com/products.json', products)
//     .subscribe(response => {
//       console.log(response);
//     });
//   }

//   fetchProducts() {
//         return this.http.get<Product[]>(
//           'https://mytest-324a9.firebaseio.com/products.json',
//         ).pipe(
//           map(products => {
//             return products.map(product => {
//               return {
//                 ...product,
//               ingredients: product.ingredients ? product.ingredients : []
//               };
//             });
//         }),
//     tap(products => {
//      this.productService.setProducts(products);
//     })
//    );
//   }

//   addProduct(){
//     this.http.get(
//       'https://mytest-324a9.firebaseio.com/products.json')
//       .subscribe(products => {
//       console.log(products);
//       });
//    }

// }



