import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CrudUserService } from 'src/app/_services/crud-user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  
   
  constructor(private crudUserService:CrudUserService, private toastr: ToastrService,  private router: Router ,private authService: AuthService) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.crudUserService.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/admin/allUser']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
 
}
