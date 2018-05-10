import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object = {
    name: null,
    password: null
  }
  constructor() { }

  ngOnInit() {
  }

  guardar(forma: any) {
    console.log("formulario guardado");
    console.log(forma.value);
    console.log(forma);
  }

}
