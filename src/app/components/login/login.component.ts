import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object = {
    username: null,
    password: null
  }
  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log('hola')
  }

  login(formLogin) {
    console.log(formLogin)
    this.auth.login(formLogin.value.username, formLogin.value.password)
  }
}
