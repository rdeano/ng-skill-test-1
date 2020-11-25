import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  readonly rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = 'http://localhost:8081/test-1/';
  }

  createUser(body) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl+'api/createUser',body,{headers : reqHeader});
  }
}
