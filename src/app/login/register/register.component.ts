import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  user } from 'src/model/user';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private http:HttpClient,private url:ServiceService){}
    obj:user=new user();


    Register()
    {

      console.log(this.obj);

      this.http.post(this.url.geturl()+'account/register' ,this.obj).subscribe
    ((data:any)=>{
      if(data==true)
      {
        window.alert("save");
        
      }
      else
      {
        window.alert("not save");
      }


      })
    }
     


  }

