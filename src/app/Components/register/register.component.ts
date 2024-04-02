import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../Shared/password-match.directive';
import { CardModule } from 'primeng/card';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { registerUserData } from '../models/auth';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ReactiveFormsModule,TranslateModule,InputTextModule,ButtonModule,CardModule, NavBarComponent, HeaderComponent, FooterComponent],
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSumitted : Boolean = false
    emailUsedBefore : Boolean= false
    lang:any; 
 

  registerForm = new FormGroup({
    fName:new FormControl('', [Validators.required]),
    lName:new FormControl('', [Validators.required]),
    phoneNumber:new FormControl('', [Validators.required]),
    comfirmPassword:new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
 
  get fName(){return this.registerForm.get('fName')}
  get lName(){return this.registerForm.get('lName')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get comfirmPassword(){return this.registerForm.get('comfirmPassword')}
  get phoneNumber(){return this.registerForm.get('phoneNumber')}
  errorMessage = '';
  langChangeSubscription: Subscription;

  constructor(private _auth: AuthService, private translate: TranslateService) {
    this.lang = localStorage.getItem('lang')
    translate.use(this.lang);
    this.langChangeSubscription = translate.onLangChange.subscribe(event => {
      this.lang = event.lang;
   })
  }
    
  handleRegister() {
    this.isSumitted = true;
    if (this.registerForm.valid) {
      const formData = this.registerForm.value as registerUserData;
      // Check if any form data is null or undefined
      if (formData.fName && formData.lName && formData.phoneNumber && formData.comfirmPassword && formData.email && formData.password) {
        this._auth.register(formData).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            this.emailUsedBefore = true;
            console.log(this.emailUsedBefore);
            console.log(err);
          },
          () => {
            this.registerForm.reset();
            this.isSumitted = false;
          }
        );
      } else {
        // Handle case where form data is incomplete
        console.error("Form data is incomplete");
      }
    }
  }
  


}
