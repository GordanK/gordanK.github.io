import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: Form = {
    email: '',
    password: '',
  }

  isLoading: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (this.isLoading) return;

    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        alert("yaaaaaaaa login success")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("erroooo")
      })
      .finally(() => (this.isLoading = false));
  }
}
