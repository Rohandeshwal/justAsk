import { Component, OnInit } from '@angular/core';
import { JustAskDataHelperService } from './core/services/just-ask-data-helper-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JustAsk';
constructor(){}
ngOnInit()
{
}
}
