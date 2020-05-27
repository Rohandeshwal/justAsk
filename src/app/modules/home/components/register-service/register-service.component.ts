import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.scss']
})
export class RegisterServiceComponent implements OnInit {
  MasterData:any
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

 this.MasterData = this.sharedService.getData(); 
 console.log("aajaa",this.MasterData);
 

  }


}
