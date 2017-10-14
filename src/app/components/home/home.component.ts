import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private uploadUrl:string = "/upload/tesy";

  constructor() {

  }

  ngOnInit() {
    console.log("home.component");
    
  }

  pingDoneAction(data:any){
    console.log("OK");
  }

  pingErrorAction(error:any){
    console.log(error);
  }  

  
  // onUploaded(event:any){
  //     console.log("onUploaded = ", event);
  //     console.log("get xhr = ", event.xhr.response);
  // }

  // onUploadedError(event:any){
  //     console.log("upload error = ", event);
  //     // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
  // }

}
