import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginform = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private authService: AuthService, private msgService: MessageService, private router: Router) {

  }
  get email() {
    return this.loginform.controls['Email'];
  }
  get password() {
    return this.loginform.controls['Password']
  }
  loginUser() {
    const { Email, Password } = this.loginform.value;
    this.authService.getUserByEmail(Email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].Password === Password) {
          sessionStorage.setItem('email', Email as string);
          // this.router.navigate(['/home']);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }

    )
  }

  LogOut() {
    sessionStorage.clear();
    this.router.navigate(['Login']);
  }

}
