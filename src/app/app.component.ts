import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ServiceService } from 'src/app/service/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accounts';

constructor(private http:HttpClient, private url:ServiceService){}

whatshow=0;
newlogin(num:number)
{
    this.whatshow=num;
   
}



pass:string;
username:string;
show=0;
login()
{
      console.log(this.username+" "+this.pass)
      this.http.get(this.url.geturl()+'account/login'+this.username+'and'+this.pass).subscribe((data:any)=>{

  if(!data)
  {
    window.alert("not done"); 
    
  }
  else
  {
    
    window.alert("login done"); 
   
    this.show=1;
    console.log(this.show);
   
  }
  })

}
}
