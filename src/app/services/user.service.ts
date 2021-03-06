import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';



export interface User {
  _id: number,
  name: string,
  email:string,
  age: number,
  about: string,
  bands: string[],
  style: string[],
  instrument: string[],
  image: string
}

@Injectable()
export class UserService {
  usersToDisplay: any;
  users: any;
  // Como todas las llamadas a nuestra API empiezan igual definimos una variable para no repetir codigo
  urlBase: string = "http://localhost:3977/api/"
  // Usamos la variable errors para poder mostrar los errores en el html cuando existan.
  errors: string = ""
  // en constructor instanciamos todos los imports que necesitemos usar.
  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router) {
    console.log("servicio listo para usarse")

  }

  uploadImage(fileToUpload: File, userId: string) {
    
    // para subir una imagen, tal y como hemos hecho en postman necesitamos enviarle un formData con la imagen.
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    // Concatenamos urlBase con el endpoint donde queremos apuntar.
    this.http
      .post(this.urlBase + "user/insertImage/" + userId, formData).subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
      });
  }

  getUsers():any {
    
    let headers = new HttpHeaders({ "authorization": this.authService.getToken() })
    // Peticion GET para obtener todas las peliculas
    // Vaciamos users ya que vamos a obtener todas de nuevo
    this.users = []
    return this.http.get(this.urlBase + 'user', { headers: headers }).subscribe(data => {
      for (let index in data) {
        this.users.push(data[index])
      }
      console.log(data)
      // Usamos una variable auxiliar usersTodisplay para no tocar toda la coleccion de pelicuals que hemos obtenido.
      this.usersToDisplay = this.users;
      console.log(this.usersToDisplay)
      console.log("termina la descarga de usuarios");

    }, err => {
      // Si hay algun error asignamos el mensaje a la variable errors que msotrara el mensaje en el front
      console.log(err);
      this.errors = err.message
    });
  }

  searchUsers(term: string) {
    // Buscamos peliculas dentro de movies y mostramos las que coincidan.
    // Esto es una manera de hacerlo, otra manera seria llamar a la API para obtener las peliculas que coincidan directamente desde base de datos
    let users_list: User[] = [];
    for (let user of this.users) {
      if (user.name.toLowerCase().includes(term.toLowerCase())) {
        users_list.push(user);
      }
    }
    this.usersToDisplay = users_list
  }

  getUser(id: number): User {
    console.log(this.usersToDisplay)
    for (let user of this.usersToDisplay) {
      if (user._id == id) {
        return user;
      }
    }
  }



  addUser(user: User, fileToUpload: File) {
    console.log(user)
    
    this.http.post(this.urlBase + "user", user).subscribe((resp: any) => {
      console.log(resp);
      console.log(fileToUpload)
      this.uploadImage(fileToUpload, resp._id)
      this.router.navigate(['/users'])
      

      
    },
      (err) => {
        console.log("error");
        console.log(err.message);
        this.router.navigate(['/home'])
      });
  }
}
