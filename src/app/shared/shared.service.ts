import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConfig } from 'src/configurations/api.config';
import { APIService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSection: any;
  regData: any;

  constructor(private http:APIService) { }
  setHighlighterId(value:string){
    this.selectedSection = value;
  }
  getHighlighter(){
    return this.selectedSection;
  }
 getServices(){
   let URL = environment.APIBase +APIConfig.API.services;
   return this.http.httpGet(URL);
 }
 getServiceDetail(id){
   let URL = environment.APIBase +APIConfig.API.serviceDetails+id;
   return this.http.httpGet(URL);
 }
}
