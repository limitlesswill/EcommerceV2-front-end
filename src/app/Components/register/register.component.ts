import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../Shared/password-match.directive';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ReactiveFormsModule,InputTextModule,ButtonModule,CardModule],
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    lName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    Validators: passwordMatchValidator
  })
  get lName() {
    return this.registerForm.controls['lName'];
  }
  get fName() {
    return this.registerForm.controls['fName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
  get phoneNumber(){
    return this.registerForm.controls['phoneNumber'];
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private fb: FormBuilder) { }

  onSubmit(): void {
    debugger;
    const { fName, lName, email, phoneNumber,password,confirmPassword} = this.registerForm.value;

    this.authService.register(fName, lName, email, phoneNumber,password,confirmPassword).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
