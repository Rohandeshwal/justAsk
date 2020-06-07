import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { JustAskDataHelperService } from 'src/app/core/services/just-ask-data-helper-service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  show = false;
   isCollapsed = false;
  
  
  cardsData:any;
  constructor(private justAskDataHelper:JustAskDataHelperService,
    private route:Router) { }

  ngOnInit(): void { 
this.getCardData();
  }
 
  getCardData(){
    
    this.cardsData = this.justAskDataHelper.getAllServices();
  console.log(this.cardsData);
  }
  goToRegister(id){
    this.route.navigate(['service/'+id])
  }

}
