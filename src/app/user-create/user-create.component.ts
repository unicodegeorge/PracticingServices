import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  username: string;
  password: string;

  constructor( private readonly userService: UserService, private router: Router) {
  }
  ngOnInit(): void {
  }
  create(): void {
    const name = 'George Dvořák';
    this.userService.createUser(this.username, this.password).subscribe(
        user => this.router.navigateByUrl(`/user/${user.id}`)
    );
  }


}
