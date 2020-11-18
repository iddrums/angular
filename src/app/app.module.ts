import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductEditComponent } from './productedit/productedit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './productdetails/productdetails.component';
import { NewComponent } from './products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LoginInterceptorService } from './login/login-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { ProductsService } from './products/product.service';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    AboutComponent,
    ProductEditComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    NewComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: false,
        strictActionTypeUniqueness: false,
      },
    }),
  ],
  providers: [ProductsService, CookieService, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
