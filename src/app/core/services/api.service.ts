import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {

  }

  httpGet(url: string) {
    return this.http.get(url);
  }
  httpPost(url, data) {
    return this.http.post(url, data);
  }
  httpPut() { }
  httpDelete() { }
}
