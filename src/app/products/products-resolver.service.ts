// import { Injectable } from "@angular/core";
// import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { Resolve } from "@angular/router";
// import { Observable } from "rxjs";
// import { DataStorageService } from "../shared/data-storage.service";
// import { Product } from "./products.model";

// @Injectable({providedIn: 'root' })
// export class ProductsResolverService implements Resolve<Product[]> {
//   constructor(private dataStorageService: DataStorageService) {

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//       return this.dataStorageService.fetchProducts();
//     }
//   }
//   // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
//   //   throw new Error("Method not implemented.");
//   // }
// }
