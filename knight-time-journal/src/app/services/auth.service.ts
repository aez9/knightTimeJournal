import { Injectable } from '@angular/core';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() {
  }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser(): Promise<void> { return firebase.auth().signOut(); }
  getCurrentUser(): any {
    return firebase.auth().currentUser?.email;
  }
}
