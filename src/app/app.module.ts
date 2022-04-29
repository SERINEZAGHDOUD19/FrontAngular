import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './board-admin/users/list-user/list-user.component';
import { EditUserComponent } from './board-admin/users/edit-user/edit-user.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddUserComponent } from './board-admin/users/add-user/add-user.component';
import { ListClientComponent } from './board-admin/clients/list-client/list-client.component';
import { ListDemandeComponent } from './board-admin/demandes/list-demande/list-demande.component';
import { EditClientComponent } from './board-admin/clients/edit-client/edit-client.component';
import { AddClientComponent } from './board-admin/clients/add-client/add-client.component';
import { ConfirDialog } from './confir-dialog/confir-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
//import { EditClientComponent } from './board-admin/clients/edit-client/edit-client/edit-client.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent,
    FooterComponent,
    ListUserComponent,
    EditUserComponent,
    AddUserComponent,
    ListClientComponent,
    ListDemandeComponent,
    EditClientComponent,
    AddClientComponent,
    ConfirDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
