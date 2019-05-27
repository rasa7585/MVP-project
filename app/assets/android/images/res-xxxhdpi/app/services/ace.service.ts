import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AceService {

  constructor(private http: HttpClient) { }
  
  getData(url){
    return this.http.get(`${apiUrl}/${url}`);
  }
}
