import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSection: any;
  regData: any;

  constructor() { }
  setHighlighterId(value:string){
    this.selectedSection = value;
  }
  getHighlighter(){
    return this.selectedSection;
  }
  setData(value:any){
   this.regData = value;
  }
  getData(){
    return this.regData;
  }
}
