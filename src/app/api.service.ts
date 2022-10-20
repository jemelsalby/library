import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewBooks=()=>{
    return this.http.get("http://localhost:8080/viewBooks")
  }
  addBooks=(data:any)=>{
    return this.http.post("http://localhost:8080/addBooks",data)
  }
}
