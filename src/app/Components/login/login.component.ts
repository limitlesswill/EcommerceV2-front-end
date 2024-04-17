import { User } from './../../interfaces/auth';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
// import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CardModule,InputTextModule,ButtonModule,TranslateModule, NavBarComponent,HeaderComponent],
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted = false
    invalidData = false
    errorMessage: string ="";
    lang:any; 
    langChangeSubscription: Subscription;
    

    constructor(private translate: TranslateService, private _auth:AuthService, private _router:Router) {
      this.lang = localStorage.getItem('lang')
      translate.use(this.lang);
      this.langChangeSubscription = translate.onLangChange.subscribe(event => {
        this.lang = event.lang;
        // Update any component-specific properties or UI elements here
      });
    }

    LoginForm = new FormGroup({
      UserEmail:new FormControl( 'test.com@gmail.com' , [Validators.required, Validators.email] ),
      Password: new FormControl('123456', [Validators.required])
  })
 

    ngOnInit() {}

    get UserEmail(){ return this.LoginForm.get('UserEmail')}
    get Password(){ return this.LoginForm.get('Password')}

    handleLogin() {
      this.isSubmitted = true;
      if (this.LoginForm.valid) {
        this._auth.loginUser(this.LoginForm.value).subscribe(
          (response: any) => {
            if (response && response.token && response.expiration) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('expiration', response.expiration);
    
              // Decode the token to get user ID
              const decodedToken: any = jwtDecode(response.token);
              console.log('Decoded Token:', decodedToken); // Log decoded token for debugging
              
              if (decodedToken && decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']) {
                const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  
                // Now you can use userId as needed, for example, store it in local storage
                localStorage.setItem('userId', userId);
                console.log('userId:', userId); // Log userId for debugging
                





                // Redirect to dashboard or any other page
                this._router.navigate(['/home']);
              } else {
                console.error('Name claim not found in token.');
                this.errorMessage = 'Invalid token.';
              }
            } else {
              console.error('Invalid response from server.');
              this.errorMessage = 'Invalid response from server.';
            }
          },
          (err) => {
            console.error('Error occurred during login:', err);
            this.errorMessage = 'An error occurred while logging in.';
          },
          () => {
            this.LoginForm.reset();
            this.isSubmitted = true;
            this._auth.isAuth = true
          }
        );
      }
    }
     
      
  }

