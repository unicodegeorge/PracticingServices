import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private id = 0;
  private users: IUserEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  createUser(newUsername: string, newPassword: string): Observable<IUserEntity>{

    const newUser: IUserEntity = {id: this.id, username: newUsername, password: newPassword};
    if (this.users.find(u => u.username === newUsername)) {
     alert(`User with username ${newUsername} already exists`);
    } else {
      this.id++;
      this.users.push(newUser);
      return of(newUser);
    }
  }

  editUser(id: number, newUsername: string, newPassword: string): boolean{
    if (this.users.find(u => u.id === id)){
      const user: IUserEntity = this.users.find(u => u.id === id);
      if (newPassword.length > 1) {user.password = newPassword; }
      if (newUsername.length > 1) {user.username = newUsername; }
      return true;
    }
    return false;
  }
  getUserById(idNumber: number): Observable<IUserEntity> {

    return of(this.users.find(u => u.id === idNumber));
  }
}
