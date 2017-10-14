import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SubadminComponent } from './subadmin/subadmin.component';


const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
      {path: 'subadmin', component: SubadminComponent, outlet:'admin'},
      {path: '', component: SubadminComponent, outlet:'admin'}
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes , { useHash: true }) ],
  exports: [ RouterModule ]
})
export class routing {}