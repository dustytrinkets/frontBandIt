import { Component, OnInit } from '@angular/core';
// import { fadeInAnimation } from '../../_animations/index';
import { UserService } from '../../services/user.service';

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
  constructor(public userService : UserService) { }
    fileToUpload: File = null;

  ngOnInit() {
  }
  addUser(forma: any) {
    // console.log("formulario guardado");
    console.log(forma.value);
    console.log(forma);
    this.userService.addUser(forma.value, this.fileToUpload)
  }

  handleFileInput(files: FileList) {
    // Este metodo esta asociado con un evento onChange, cuando se seleccione un file nevo en el input guardaremos provisionalmente el file hasta hacer el submit
    console.log(files.item(0));
    this.fileToUpload = files.item(0);
  }


}