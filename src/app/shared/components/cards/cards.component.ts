import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 
  cardsData= [
    {
    img:"./assets/images/business-close-up-energy-equipment-191648.jpg",
    name:"Plumbing",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }, {
    img:"./assets/images/silver-microwave-oven-on-brown-wooden-kitchen-cabinet-3773573.jpg",
    name:"Home Interior",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"./assets/images/electrician.jpg",
    name:"Electrician",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"./assets/images/man-planting-plant-169523.jpg",
    name:"Plantation",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"./assets/images/disin.jpg",
    name:"Disinfection & Sanitisation",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"./assets/images/steel.jpg",
    name:"Aluminium,Steel & Glasswork",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"../assets/images/comfort-control-cooking-data-213162.jpg",
    name:"Home Appliance Repair",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img:"./assets/images/silver-microwave-oven-on-brown-wooden-kitchen-cabinet-3773573.jpg",
    name:"Ac Service & Clinics",
    description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
 
]
  constructor(private sharedService:SharedService,public route:Router) { }

  ngOnInit(): void {
    
  }
  goToRegister(item){
    this.sharedService.setData(item);
    this.route.navigate(['service'])
  }

}
