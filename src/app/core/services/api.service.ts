import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class APIService {
  // TODO: this can be moved to the config file. Needs to be updated to localhost:3000 when running the server locally
  private baseUrl:string = "http://justaskservices.co.in/";
  constructor(private http: HttpClient) {

  }

  httpGet(url: string) {
    return this.http.get(url);
  }
  httpPost(url, data) {
    return this.http.post(this.serviceUrl(url), data);
  }

  private serviceUrl(url): string
  {
    return this.baseUrl.concat(url);
  }
  httpPut() { }
  httpDelete() { }
}
