import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  // gonext(id){
  //   console.log(id);
  //   this.router.navigate(['admin', {outlets: {'admin': ['subadmin', id]}}]);
  // }

  gonext(id) {
    console.log(id);
    this.router.navigate(['/admin', {outlets: {'admin': ['subadmin', id]}}]);
  }

}
