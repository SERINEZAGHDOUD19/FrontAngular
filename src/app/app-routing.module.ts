import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListUserComponent } from './board-admin/users/list-user/list-user.component';
import { EditUserComponent } from './board-admin/users/edit-user/edit-user.component';
import { AddUserComponent } from './board-admin/users/add-user/add-user.component';
import { ListClientComponent } from './board-admin/clients/list-client/list-client.component';
import { ListDemandeComponent } from './board-admin/demandes/list-demande/list-demande.component';
import { AddClientComponent } from './board-admin/clients/add-client/add-client.component';
import { EditClientComponent } from './board-admin/clients/edit-client/edit-client.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/allUser', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
  { path: 'admin/allUser/addUser', component: AddUserComponent },
  { path: 'admin/allClient', component: ListClientComponent },
  { path: 'admin/allDemande', component: ListDemandeComponent },
  { path: 'admin/allClient/addClient', component: AddClientComponent },
  { path: 'update-client/:id', component: EditClientComponent },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
