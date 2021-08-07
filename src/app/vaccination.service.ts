import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  //     "Content-Type": "application/json; charset=UTF-8"
  //   })
  // };
  constructor(private http:HttpClient) { 

    
  }

  // getVaccinationStatusList(){
  //   const url='https://covid-19.nchc.org.tw/api/covid19?CK=covid-19@nchc.org.tw&querydata=2001'
  //  return this.http.get(url,this.httpOptions)   
  // }
}
