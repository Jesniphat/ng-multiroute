import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.css']
})
export class SubadminComponent implements OnInit {

  constructor(public router: Router,public route: ActivatedRoute,) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.has('id'));
    if(this.route.snapshot.paramMap.has('id')){
      console.log(this.route.snapshot.paramMap.getAll('id'));
    }
  }

}
