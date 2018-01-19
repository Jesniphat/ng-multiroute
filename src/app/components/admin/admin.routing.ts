import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
// import { SubadminComponent } from './subadmin/subadmin.component';
import { SecondadminComponent } from './secondadmin/secondadmin.component';


const routes: Routes = [
    { path: '', component: AdminComponent, children: [
      {path: 'subadmin', loadChildren: './subadmin/subadmin.module#SubadminModule'},
      {path: '', redirectTo: 'subadmin', pathMatch: 'full'},
      {path: 'second/:id', component: SecondadminComponent, outlet: 'admin'}
  ]}
];

// const routes: Routes = [
//   { path: 'admin', component: AdminComponent, children: [
//     {path: 'subadmin/:id', component: SubadminComponent, outlet:'admin'},
//     {path: '', component: SubadminComponent, outlet:'admin'},
//     {path: 'second/:id', component: SecondadminComponent, outlet:'admin'}
// ]}
// ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Routing {}
