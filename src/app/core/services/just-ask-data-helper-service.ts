import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JustAskDataHelperService {
    private servicesData:any  = [];
    private servicesJsonData = 'assets/data/services-data.json';
    
  constructor(private httpClient:HttpClient) { }

 load() : Promise<any>
 {
   const appPromise = this.httpClient.get(this.servicesJsonData).toPromise().then(data => this.servicesData = data);
  return appPromise;    
 }

 getAllServices()
 {
     return this.servicesData.services;
 }
 getServiceDetails(serviceId: number){
   return this.servicesData.services.filter(service=> service.id== serviceId).pop();
 }
}
