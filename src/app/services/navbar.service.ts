import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private baseurl="";
  constructor(private http:HttpClient) { }

  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)

  }
}
