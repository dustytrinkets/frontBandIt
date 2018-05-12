import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';



export interface Band {
  _id: number,
  name: string,
  about: string,
  url: string[],
  members: string[],
  style: string[],
  instrument: string[],
  image: string
}

@Injectable()
export class BandService {
  bandsToDisplay: any;
  bands: any;
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

  uploadPoster(fileToUpload: File, bandId: string) {
    // para subir una imagen, tal y como hemos hecho en postman necesitamos enviarle un formData con la imagen.
    const formData: FormData = new FormData();
    formData.append('poster', fileToUpload, fileToUpload.name);
    // Concatenamos urlBase con el endpoint donde queremos apuntar.
    this.http
      .post(this.urlBase + "band/insertImage/" + bandId, formData).subscribe(resp => {
        console.log(resp);
      }, err => {
        console.log(err);
      });
  }

  getBands(): any {
    // Peticion GET para obtener todas las peliculas
    this.bands = []
    return this.http.get(this.urlBase + 'band').subscribe(data => {
      for (let index in data) {
        this.bands.push(data[index])
      }
      console.log(data)
      // Usamos una variable auxiliar bandsTodisplay para no tocar toda la coleccion de pelicuals que hemos obtenido.
      this.bandsToDisplay = this.bands;
      console.log(this.bandsToDisplay)
      console.log("termina la descarga de usuarios");

    }, err => {
      // Si hay algun error asignamos el mensaje a la variable errors que msotrara el mensaje en el front
      console.log(err);
      this.errors = err.message
    });
  }

  searchBands(term: string) {
    // Buscamos peliculas dentro de movies y mostramos las que coincidan.
    // Esto es una manera de hacerlo, otra manera seria llamar a la API para obtener las peliculas que coincidan directamente desde base de datos
    let bands_list: Band[] = [];
    for (let band of this.bands) {
      if (band.name.toLowerCase().includes(term.toLowerCase())) {
        bands_list.push(band);
      }
    }
    this.bandsToDisplay = bands_list
  }

  getBand(id: number): Band {
    console.log(this.bandsToDisplay)
    for (let band of this.bandsToDisplay) {
      if (band._id == id) {
        return band;
      }
    }
  }



  addBand(band: Band) {
    console.log(band)

    this.http.post(this.urlBase + "band", band).subscribe((resp: any) => {
      console.log(resp);

    },
      (err) => {
        console.log("error");
        console.log(err.message);
        // Si hay un error redirigimos al login.
        this.router.navigate(['/login'])
      });
  }
}
