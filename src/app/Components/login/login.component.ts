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

    handleLogin(){
        this.isSubmitted = true
        if(this.LoginForm.valid){
          this._auth.loginUser(this.LoginForm.value).subscribe(
            (response: any) => {
              if (response && response.token) {
                localStorage.setItem('token', response.token);
                // Redirect to dashboard or any other page
                this._router.navigate(['/home']);
              } else {
                this.errorMessage = 'Invalid response from server';
              }
            },
            (err)=>{
              console.log(err)
            },
            ()=>{
              this.LoginForm.reset()
              this._auth.isAuth = true
            }
          )
        }
      }
}
