import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
// import { SubadminComponent } from './subadmin/subadmin.component';
import { SecondadminComponent } from './secondadmin/secondadmin.component'
import { Routing } from './admin.routing';

import { SubadminModule } from './subadmin/subadmin.module';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    SubadminModule
  ],
  declarations: [AdminComponent, SecondadminComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
