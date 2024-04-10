import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { ProvidentFundComponent } from './provident-fund/provident-fund.component';
import { CompanyComponent } from './company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncomeTaxComponent,
    ProvidentFundComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports:[
    CompanyComponent,
    IncomeTaxComponent,
    ProvidentFundComponent
  ]
})
export class WorkingModule { }
