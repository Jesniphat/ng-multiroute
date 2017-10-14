import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
// import { NgSemanticModule } from "ng-semantic";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    routing,
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
      HomeComponent
  ]
})
export class HomeModule { }
