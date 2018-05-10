import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Object = {
    name: null,
    email: null,
    password: null,
    age: null,
    about: null,
    style: null,
    url: null,
    instrument: null,
    image:null,
  }
  constructor() { }

  ngOnInit() {
  }
  guardar(forma: any) {
    // console.log("formulario guardado");
    console.log(forma.value);
    console.log(forma);
    // console.log(forma.about)
  }

}
