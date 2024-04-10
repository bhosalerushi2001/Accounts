import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ShowDataComponent } from 'src/app/home/show-data/show-data.component';
import { ServiceService } from 'src/app/service/service.service';
import { AddData } from 'src/model/AddData';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  obj:AddData=new AddData();
  constructor( private id:ShowDataComponent, private http:HttpClient, private url:ServiceService){
    console.log(this.id.customerid);
    this.http.get(this.url.geturl()+'account/getuser'+this.id.customerid).subscribe((data:any)=>{

      this.obj=data;
    })
  }

}
