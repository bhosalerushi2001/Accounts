import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ServiceService } from 'src/app/service/service.service';
import { AddData } from 'src/model/AddData';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent {


  constructor(private http:HttpClient,private url:ServiceService){}
  obj:AddData=new AddData();

  submit()
  {

    console.log(this.obj);
    this.http.post(this.url.geturl()+'account/addData',this.obj).subscribe
    ((data:any)=>
    {
      if(data==true)
      {
         window.alert("done");
         this.obj=new AddData();
      }
      else
      window.alert("not done");
    })

  }

}
