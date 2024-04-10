import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { AdddataComponent } from './adddata/adddata.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WorkingModule } from '../working/working.module';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    ShowDataComponent,
    AdddataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    WorkingModule
    
  ],
  exports: [
    HomePageComponent,
    
  ]
})
export class HomeModule { }
