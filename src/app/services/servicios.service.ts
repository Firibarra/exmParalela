import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  URL:String = "https://api.sebastian.cl/academia/";
  rut:string;
  clave:string;
  apikey:string;


  constructor(private http: HttpClient) { 
    console.log('En el servicio.service');
  }

  /*canActivate(){
    return true;
  }*/

  logear(rut,clave){
    //this.http.post('https://api.sebastian.cl/academia/api/v1/authentication/authenticate',pas,rut);
  };
}



