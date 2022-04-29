import { Component, OnInit } from '@angular/core';
import { CrudUserService } from 'src/app/_services/crud-user.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirDialog } from 'src/app/confir-dialog/confir-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
  
})
export class ListUserComponent implements OnInit {
  public user!: any;
  public c!: any;
  public role!:any;
  
  public editUser!: User;
  public users!: User[];
  constructor(private crudUserService:CrudUserService, private toastr: ToastrService,  private router: Router, private dialog: MatDialog  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.crudUserService.getResource("/users/all").subscribe(data=>{
    this.user=data;}, err=>{console.log(err)})
     }


     
     updateUser(id: number){
      this.router.navigate(['update-user', id]);
    }
  


   deleteUser(id: number){
   
      this.crudUserService.deleteUser(id).subscribe( data => {
        
       
			console.log('user deleted successfully!');
      Swal.fire('Hi', 'user deleted successfully!', 'success');
      this.getUsers(); }
      
      , error => {
        console.log(error.error.message);
      }
      
      );
    }

    openDialog(id:number) {
      /*const dialogRef = this.dialog.open(ConfirDialog,{
      data:{
        message: 'Do you want to delete this user?'
      }
      });
      
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteUser(id);
        }
      });*/
      if(confirm('Do you want to delete this user?')){
        this.deleteUser(id);
      }
    } 
  
}
