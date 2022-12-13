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

  public showPassword = false;  
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
      alert("your email does not exist or your password is wrong");
    }
  }

  registerBtn() {
    this.router.navigateByUrl('register');
  }
  resetPass() {
    this.router.navigateByUrl('resetPass')
  }

}
