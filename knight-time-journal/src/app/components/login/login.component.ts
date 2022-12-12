import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User = {
    email: '',
    password: '',
  };

  public loading = false;

  constructor(
    private authSvc: AuthService,
    private router: Router,

  ) { }
  ngOnInit(): void {

  }
  async onSubmit() {
    this.loading = true;
    try {
      await this.authSvc.loginUser(this.user.email,
        this.user.password);
      this.router.navigateByUrl('journalhome');
    } catch (error) {
      this.loading = false;
      alert("Fuck off");
    }
  }
  resetPassword(): void {
    if (!this.user.email) {
      console.log("no user log in");
      return;
    }
    this.authSvc.resetPassword(this.user.email);
  }
  registerBtn() {
    this.router.navigateByUrl('register');
  }


}
