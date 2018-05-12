import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
// import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // animations: [fadeInAnimation],  
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(public userService : UserService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id)
      this.user = userService.getUser(params.id)
    })
  }

  ngOnInit() {
  }

}
