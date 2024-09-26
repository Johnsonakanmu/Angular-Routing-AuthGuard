import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path: 'user_list', component: UserListComponent},
  {path: 'user_form', component: UserFormComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
