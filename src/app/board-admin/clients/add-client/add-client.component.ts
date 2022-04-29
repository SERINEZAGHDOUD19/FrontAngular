import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/_services/auth.service';
import { CrudClientService } from 'src/app/_services/crud-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = new Client();
  constructor(private crudClientService:CrudClientService, private toastr: ToastrService,  private router: Router ,private authService: AuthService) { }

  ngOnInit(): void {
  }
  saveClient(){
    this.crudClientService.createClient(this.client).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }
  goToClientList(){
    this.router.navigate(['/admin/allClient']);
  }

  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }

}
