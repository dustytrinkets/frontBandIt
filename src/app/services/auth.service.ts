import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

const TOKEN_NAME = "current-user"

@Injectable()
export class AuthService {
  urlBase: string = "http://localhost:3977/api/"
  constructor(public http: HttpClient,
    private router: Router) { }

  login(username: string, password: string) {
    console.log(username, password)
    this.http.post(this.urlBase + "user/login", { username, password, getToken: true }).subscribe((resp: any) => {
      console.log(resp);
      console.log(resp.token);
      this.setToken(resp.token)
    }, err => {
      console.log(err);
    });
  }


  register(formUser) {
    let headers = new HttpHeaders().set('authentification', this.getToken());

    this.http.post(this.urlBase + "user",
      JSON.stringify(formUser),
      { headers: headers }
    )

      .subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
        this.router.navigate(['/login'])
      });
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem(TOKEN_NAME);
  }

}

