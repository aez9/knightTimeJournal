import { Component, OnInit } from '@angular/core';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User = {
    email: '',
    password: '',
  };

  public loading = false;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  public email = this.user.email;

  /**
   * createAccount() signs up 
   * new users for DB to have 
   * an area for their own entries
   */
  async createAccount(): Promise<void> {
    this.loading = true;
    try {
      await this.authSvc.signupUser(this.user.email,
        this.user.password);
      //create new user collection
      const result = await this.db.collection
      alert("Account succesfuly created!");
      this.router.navigateByUrl('login');
    } catch (error) {
      this.loading = false;
      alert("Error with inputed email address!");
    }

  }

  /**
   * reroutes to login page
   * if users alreaady have 
   * an account
   */
  backtoLogin() {
    this.router.navigateByUrl('login');
  }
}
