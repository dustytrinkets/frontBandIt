import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { Router } from '@angular/router';

// import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
})


export class UsersComponent implements OnInit {
  usersToDisplay: User[];
  constructor(public userService: UserService,
              private router: Router) { 
    let usersToDisplay = userService.getUsers()
    console.log(usersToDisplay)
  }
            
  ngOnInit() {
      
  }

  searchTerm(term: string) {
    // En este componente tenemos un input que nos permite realizar busquedas
    console.log(term)
    this.userService.searchUsers(term);
  }

}
