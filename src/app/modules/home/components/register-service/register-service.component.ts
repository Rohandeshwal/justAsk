import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.scss']
})
export class RegisterServiceComponent implements OnInit {
  MasterData:any;
  model: any = {};
  submitted: Boolean = false;
  f:FormGroup
  constructor(private sharedService:SharedService,private toastr: ToastrService,private activatedRoute:ActivatedRoute,private shared:SharedService) { }

  ngOnInit(): void {
this.getServiceData();
scrollTo(0,0)

  }
  // aaja(){
  //   this.toastr.success('Hello world!', 'Toastr fun!');
   
  // }
  getServiceData(){
this.activatedRoute.params.subscribe(res=>{
  console.log("aajaa",res);
  this.shared.getServiceDetail(res.id).subscribe(res2 =>{
    this.MasterData=res2[0];
    
  })


})
  }
   onSubmit() {
    this.toastr.success('Successfully send to the admin');
    this.submitted = true;
    // if (this.f.valid) {
    //  
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    // }


}}
