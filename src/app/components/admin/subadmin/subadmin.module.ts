import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminComponent } from './subadmin.component';
import { Routing } from './subadmin.routing';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [ SubadminComponent ],
  exports: [ SubadminComponent ]
})
export class SubadminModule { }
