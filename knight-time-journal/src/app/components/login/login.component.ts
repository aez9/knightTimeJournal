import { Component, OnInit } from '@angular/core';
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
  /**
   * On submit, authenticate 
   * the user credentials and reroute
   * to journal home page if credentials are confirmed
   * 
   * throws alert if credentials do not match any in database
   */
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

  /**
   * Reroute to register page if 
   * user does not have account
   */
  registerBtn() {
    this.router.navigateByUrl('register');
  }

  /**
   * Reroute to resetPass page 
   * if user forgot their password
   */
  resetPass() {
    this.router.navigateByUrl('resetPass')
  }
}
