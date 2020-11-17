import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponseData, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isLoginMode = true;
 isLoading = false;
 error: string = null;

 constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
  }

 onSwitchMode() {
   this.isLoginMode = !this.isLoginMode;
 }

 onSubmit(form: NgForm) {
   if (!form.valid) {
     return;
   }
 const email = form.value.email;
 const password = form.value.password;

 let loginObs: Observable<LoginResponseData>

 this.isLoading = true;
 if (this.isLoginMode) {
  loginObs = this.loginService.login(email, password)
 } else {
  loginObs = this.loginService.signup(email, password)
 }

 loginObs.subscribe(  resData => {
  console.log(resData);
  this.isLoading = false;
  this.router.navigate(['/products']);
},
errorMessage => {
  console.log(errorMessage);
  this.error = errorMessage;
  this.isLoading = false;
}
);

 form.reset();
 }

 onHandleError(){
   this.error = null;
 }

}
