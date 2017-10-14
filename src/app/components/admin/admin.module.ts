import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';
import { SubadminComponent } from './subadmin/subadmin.component';
import { routing } from "./admin.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AdminComponent, SubadminComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
