
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
   
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports:[

    
    RegisterComponent


  ]
})
export class LoginModule { }
