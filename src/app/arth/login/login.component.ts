import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form : Form= {
  email:'',
  password:'',
}

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form);
  }
}
