import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  show = false;
   isCollapsed = false;
  
  
  cardsData:any;
  constructor(private sharedService:SharedService,
    private route:Router,private shared:SharedService) { }

  ngOnInit(): void { 
this.getCardData();
  }
 
  getCardData(){
    
    this.shared.getServices().subscribe(res =>{
      this.cardsData = res;
      console.log(res);
    })
  }
  goToRegister(id){
    // this.sharedService.setData(id);
    this.route.navigate(['service/'+id])
  }

}
