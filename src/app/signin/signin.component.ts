import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, RouterModule ],
  templateUrl: './signin.component.html',
})

export class SigninComponent {
  signinForm: FormGroup;
  successMessage: string | any = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) 
  
  {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /*
  onSubmit() {
    if (this.signinForm.valid) {
      this.authService.signIn(this.signinForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.successMessage = response;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {  console.error('Signin failed', error); }
      });
    }
  }
*/

onSubmit() {
  if (this.signinForm.valid) {
    this.authService.signIn(this.signinForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.successMessage = response.message || 'Login successful!';
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Signin failed', error);
      }
    });
  } 
}





}