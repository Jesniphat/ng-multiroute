import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubadminComponent } from './subadmin.component';

const routes: Routes = [
  { path: '', component: SubadminComponent, outlet: 'admin'},
  { path: ':id', component: SubadminComponent, outlet: 'admin'}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Routing {}
