import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ArthService } from '../arth.service';


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



  constructor(private arthService:ArthService) { }

  ngOnInit(): void {
  }
  submit() {
    this.arthService.login(this.form)
  }
  isLoading(){
    return this.arthService.isLoading;
  }
}
