import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserEntity, UserService} from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: IUserEntity;
  edit = false;
  newUsername: string;
  newPassword: string;
  constructor(
    private readonly  activatedRoute: ActivatedRoute,
    private readonly  usersService: UserService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      p => {
      const id = p.get('id');
      const idNumber = parseInt(id, 10);
      console.log(idNumber);
      this.usersService.getUserById(idNumber).subscribe(
        u => this.user = u,
        e => console.error(e));
      }
    );
    console.log(this.user);
  }

  editUser(id: number): void {
    this.usersService.editUser(id, this.newUsername, this.newPassword);
    this.edit = false;
    this.router.navigateByUrl('/users');
  }
  showEdit(): void {
    this.edit = true;
  }
}
