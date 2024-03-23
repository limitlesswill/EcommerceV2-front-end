import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { passwordMatchValidator } from '../Shared/password-match.directive';
import { User } from '../../interfaces/auth';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
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

  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;

    this.authService.registerUser(postData as unknown as User).subscribe(
      {
        next: response => {
          console.log(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
          this.router.navigate(['login']);
        },
        error: err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        }
      }
    );
  }

}