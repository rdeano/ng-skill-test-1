import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_CONFIG } from '../../app/service/apiendpoint';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  rootUrl: string;

  constructor(private http: HttpClient) {
    this.rootUrl = URL_CONFIG.endpoint + 'user';
  }
  
  get() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.rootUrl, { headers: reqHeader });
  }

  getById(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.rootUrl+'/'+id, { headers: reqHeader });
  }

  update(body) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.rootUrl + '/update', body , { headers: reqHeader });
  }

  add(body) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/add', body, { headers: reqHeader });
  }

  delete(body) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/delete', body, { headers: reqHeader });
  }

  validateuser(body) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/validateuser', body, { headers: reqHeader });
  }

  testAuthJWT(id) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.rootUrl + '/testAuthJWT?id='+id,{ headers: reqHeader });
  }


}
