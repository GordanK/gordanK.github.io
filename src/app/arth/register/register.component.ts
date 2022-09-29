import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/register-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  }



  constructor(private arthService:ArthService) { }

  ngOnInit(): void {
  }
  submit() {
    this.arthService.register(this.form);
  }
  isLoading(){
    return this.arthService.isLoading;
  }
}
