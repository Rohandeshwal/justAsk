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
    img:"./assets/images/services/plumber-1.jpg",
    name:"Plumber",
    description:"Home plumbing services includes fixing blocks and leakages, work to do with taps or sinks, toilet and sanitary work, bathroom fittings or any other residential plumbing services associated with pipes, pumps or tanks.",
    detail :"Home plumbing services includes fixing blocks and leakages, work to do with taps or sinks, toilet and sanitary work, bathroom fittings or any other residential plumbing services associated with pipes, pumps or tanks.",
  }, {
    img:"./assets/images/services/POP- False ceiling.jpg",
    name:"Home Interior ( POP, False Ceiling)",
    description:"On call service of professional interior workers who are  expert in providing the luxurious look by working with the client’s requirement and fulfilling their dream house.",
    detail:"On call service of professional interior workers who are expert in providing the luxurious look by working with the client’s requirement and fulfilling their dream house. We use branded products Gypsum Board (Borell) and POP (Shakarni) to  provide quality product to the client. Channel is used of Jindal and Lafarge."
  },
  {
    img:"./assets/images/services/electrician.jpg",
    name:"Electrician",
    description:"Doorstep repair and hassle free service for all kind of electrical issue for residential and commercial places by our premium and trained technicians.",
    detail:"Doorstep repair and hassle free service for all kind of electrical issue for  residential and commercial places by our premium and trained technicians. Our all technicians follow safety measures provided by ICMR."
  },
  // {
  //   img:"./assets/images/man-planting-plant-169523.jpg",
  //   name:"Plantation",
  //   description:"This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   detail:""
  // },
  {
    img:"./assets/images/services/Disinfection.jpg",
    name:"Sanitisation",
    description:"Offices, schools, nursing homes,  churches, day care centres gyms  and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons.",
    detail:"Offices, schools, nursing homes, shopping complex and other commercial settings are especially susceptible to germs and bacterial infestations, and not just during the cold and flu seasons. Our spray is non-corrosive so it’s safe to use where sensitive electronics are located. A fine mist protects over and under all objects so everything your employees, your customers, members, and participants touch are disinfected and deodorized to clinically clean standards. We strictly follow WHO and ICMR Guidelines to prepare our solution."
  },
  {
    img:"./assets/images/steel.jpg",
    name:"Aluminium,Steel & Glasswork",
    description:"We provide one stop solution for all your aluminium, steel and glass work needs. Toughened glass, fibre sheet, designer railing and balcony can be done with good quality and low prices.",
    detail:"We provide one stop solution for all your aluminium, steel and glass work needs. Toughened glass, fibre sheet, designer railing and balcony can be done with good quality and low prices."
  },
  {
    img:"./assets/images/services/AC Service.jpg",
    name:"Home Appliance Repair and Servicing",
    description:"Servicing- On call service for repair, installation and uninstallation of appliance like AC, Refrigerator, Washing Machine etc.",
    detail:"On call service for repair, installation and uninstallation of  appliance like AC, Refrigerator, Washing Machine etc. We use latest technology jet pump for cleaning and servicing of the appliance. 14 days warranty is provided on the repairing."
  },
  {
    img:"./assets/images/silver-microwave-oven-on-brown-wooden-kitchen-cabinet-3773573.jpg",
    name:"Painting",
    description:"Professional painting service includes interior and exterior house painting, commercial painting, pressure washing, drywall repair &amp; more.",
    detail:"Professional painting service includes interior and exterior house painting, commercial  painting, pressure washing, drywall repair &amp; more. We will make your house the way you want to be. Professionals cover all the furniture and tape to edges to get a smooth and clean work."
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
