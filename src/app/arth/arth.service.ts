import { Injectable } from '@angular/core';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../form';
import { RegisterForm } from '../register-form';

@Injectable({
  providedIn: 'root'
})
export class ArthService {
isAuthenticated: boolean = false;
isLoading: boolean = false;



constructor() { }

login(form:Form){
  if (this.isLoading) return;

  this.isLoading = true;
  const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
}
passwordMatched: boolean = true;
register(form:RegisterForm){
  if (this.isLoading) return;

    this.isLoading = true;
    if (form.password != form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
}
}
