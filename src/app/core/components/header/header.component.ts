import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { JustAskDataHelperService } from '../../services/just-ask-data-helper-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  services:any;
  constructor( public justAskDataHelper:JustAskDataHelperService) { 
   
  }
@Output()scrollOutput = new EventEmitter();

  navigateToSection(id?){
    this.scrollOutput.emit(id);
   }

}
