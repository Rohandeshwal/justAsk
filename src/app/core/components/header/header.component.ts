import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor( private sharedService:SharedService) { 
   
  }
@Output()scrollOutput = new EventEmitter();

  ngOnInit(): void {
  }
  highlighter(id?){
    
    this.sharedService.setHighlighterId(id);
    this.scrollOutput.emit(true)

  }
}
