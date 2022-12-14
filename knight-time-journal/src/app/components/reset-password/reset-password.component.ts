import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public user: User = {
    email: '',
    password: '',
  };
  constructor(private authSvc: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  resetPassword(): void {
    if (!this.user.email) {
      alert("Please enter your email or check you entered it correctly");
      return;
    }
    alert("Check your email to get the link to reset your password");
    this.router.navigateByUrl('login');
    this.authSvc.resetPassword(this.user.email);
  }
  registerBtn() {
    this.router.navigateByUrl('register');
  }
}
