import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { CrudClientService } from 'src/app/_services/crud-client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id!: number;
  client: Client = new Client();
  
  constructor(private crudClientService:CrudClientService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.crudClientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.crudClientService.updateClient(this.id, this.client).subscribe( data =>{
      this.goToClientList();
    }
    , error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/admin/allClient']);
  }

}
