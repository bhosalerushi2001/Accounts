import { Component } from '@angular/core';
import { AddData } from 'src/model/AddData';
import {HttpClient} from '@angular/common/http';
import { ServiceService } from 'src/app/service/service.service';
import { showde } from 'src/model/showde';


@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {


  constructor(private http:HttpClient, private url:ServiceService){
    this.http.get(this.url.geturl()+'account/showData').subscribe
    ((data:any)=>
    {
      console.log(data);
      this.details=data;
      this.table=1;

    })
  };

  status:string;
  table=0;
  details:showde[]=[];
  load()
  {
   


  }


  progress=0;
  customerid:number;
  work(num:number, id:number)
  {
    this.customerid=id;
    this.progress=num;
  }
   

  }

