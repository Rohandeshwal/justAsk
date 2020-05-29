import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {

    

   
 this.MasterData = this.sharedService.getData(); 
 console.log("aajaa",this.MasterData);
 

  }
  // aaja(){
  //   this.toastr.success('Hello world!', 'Toastr fun!');
   
  // }
   onSubmit() {
    this.toastr.success('Successfully to the admin');
    this.submitted = true;
    // if (this.f.valid) {
    //  
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    // }


}}
