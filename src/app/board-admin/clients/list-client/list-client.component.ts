import { Component, OnInit } from '@angular/core';
import { CrudClientService } from 'src/app/_services/crud-client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  public client!: any;
  public c!: any;
  
  
  
  public clients!: Client[];

  constructor(private crudClientService:CrudClientService, private toastr: ToastrService,  private router: Router ) { }

  ngOnInit(): void {
    this.getClients();
  }
  private getClients() {
    this.crudClientService.getResource("/clients/all").subscribe(data=>{
    this.client=data;}, err=>{console.log(err)})
     }



     deleteClient(id: number){
   
      this.crudClientService.deleteClient(id).subscribe( data => {
        
       
			console.log('client supprimé avec succès!');
      Swal.fire('Hi', 'client supprimé avec succès!', 'success');
      this.getClients(); }
      
      , error => {
        console.log(error.error.message);
      }
      
      );
    }

    openDialog(id:number) {
      
      if(confirm('Voulez-vous supprimer ce client?')){
        this.deleteClient(id);
      }
    } 

    updateClient(id: number){
      this.router.navigate(['update-client', id]);
    }
}
