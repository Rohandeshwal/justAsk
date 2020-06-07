import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  scrollTo() {
    let selectedId = this.sharedService.getHighlighter()
    document.querySelector("#" + selectedId).scrollIntoView();
    console.log("select", selectedId);

  }
}
