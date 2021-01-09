import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {UserCreateComponent} from './user-create/user-create.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'create', component: UserCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
