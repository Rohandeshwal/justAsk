import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { JustAskDataHelperService } from '../../services/just-ask-data-helper-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  services:any;
  constructor( private justAskDataHelper:JustAskDataHelperService) { 
   
  }
@Output()scrollOutput = new EventEmitter();

  ngOnInit(): void {
    this.getServices();
  }
  highlighter(id?){
    
  //  this.sharedService.setHighlighterId(id);
    this.scrollOutput.emit(true)

  }
  getServices(){
 
    this.services = this.justAskDataHelper.getAllServices();
    console.log(this.services);
  }
}
