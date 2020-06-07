import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  services:any;
  constructor( private sharedService:SharedService,private shared:SharedService) { 
   
  }
@Output()scrollOutput = new EventEmitter();

  ngOnInit(): void {
    this.getServices();
  }
  highlighter(id?){
    
    this.sharedService.setHighlighterId(id);
    this.scrollOutput.emit(true)

  }
  getServices(){
 
    this.shared.getServices().subscribe(res =>{
      this.services = res;
      console.log(res);
    })
  }
}
