import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "../interfaces/modelos.interface";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

import "rxjs";
import { PARAMETERS } from "@angular/core/src/util/decorators";

//import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ServiciosService {
  public URL: String = "https://api.sebastian.cl/academia/";
  // URL:String = "138.68.23.14/";

  IP: any[] = [];

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  
  ingresar(user: Login) {
    let body1 = JSON.stringify(user);
    let body = JSON.parse(body1);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http
      .post(this.URL + "api/v1/authentication/authenticate", body, { headers })
      .pipe(
        map((res: any) => {
          this.IP = res.apikey;
          console.log(this.IP);
          console.log(res);
          return res;
        })
      );
  }

  getcursos(aik: string): Observable<any> {
    let headers = new HttpHeaders({ "X-API-KEY": aik });
    return this.http.get<any>(this.URL + "/api/v1/courses/subjects/", {
      headers
    });
  }
  rank_Anio(aik: string): Observable<any> {
    let headers = new HttpHeaders({ "X-API-KEY": aik });
    return this.http.get<any>(this.URL + "/api/v1/rankings/years/", {
      headers
    });
  }

  rank_Anio_Curso(aik: string, parametro: string) {
    let headers = new HttpHeaders({ "X-API-KEY": aik });
    return this.http.get<any>(
      
      this.URL +"/api/v1/rankings/years/"+ parametro,
      { headers }
    );
  }
  /*getcursos2(aik:string){
    let headers =new HttpHeaders().set('X-API_KEY',aik);
    return this.http.get(this.URL+'api/v1/courses/subjects',{headers})
    .subscribe(data => {
      console.log(data);
    });
  }*/

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
