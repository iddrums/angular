import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './productedit/productedit.component';
import { NewComponent } from './products/add-product/add-product.component';
import { ProductDetailComponent } from './productdetails/productdetails.component';
import { LoginGuard } from './login/login.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'products/:id/edit', component: ProductEditComponent, canActivate: [LoginGuard], },
  { path: 'add-product', component: NewComponent,  canActivate: [LoginGuard], },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
