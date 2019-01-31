import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interfaces/modelos.interface';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

import 'rxjs';
//import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  URL:String = "https://api.sebastian.cl/academia/";

  ip:any[]=[];
  

  constructor(private http: HttpClient) { 
    console.log('En el servicio.service');
  }
  headers =new HttpHeaders({
    'Content-Type':'application/json'
  });

  /*canActivate(){
    return true;
  }*/

  ingresar(user:Login){
    let body1 =JSON.stringify(user);
    let body =JSON.parse(body1);
    let headers =new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.URL+'api/v1/authentication/authenticate',body,{headers})
    .pipe(map((res: any )=>{ 
      this.ip=res.apikey;
      console.log(this.ip);
      console.log(res);    
      return res;          
    }
    
      ))
  };
  
  

  agregarIp(){
    console.log("Agregar IPK")
  }

  /*saveKey(){
    return this.http.post(this.URL+'api/v1/authentication/authenticate',body,{headers:this.headers})
    .pipe(map(data =>data));
  }*/

  /*ingresar(user:Login){
    let body =JSON.stringify(user);
    return this.http.post(this.URL,body)
    .map(res =>{
      console.log(res);
      return res;
    })
  };*/
}



