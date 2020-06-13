import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
 
  fragment:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
  
  ngAfterViewInit(): void {
    try {
      if(this.fragment)
        document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  scrollTo(sectionId: string){
    document.querySelector("#" + sectionId).scrollIntoView();
  }
}
