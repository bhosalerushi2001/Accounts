import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';


@NgModule({
    declarations: [
        AppComponent,
       
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        FormsModule,
        HomeModule
    ]
})
export class AppModule {

 }
