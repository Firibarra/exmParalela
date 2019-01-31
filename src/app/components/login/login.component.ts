import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import {NgForm, NgModel} from '@angular/forms';
import { Login } from '../../interfaces/modelos.interface';
import { first } from 'rxjs/operators';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInfo } from 'os';
import { Key } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  key:any[]=[];
  paises: any[]=[];

  user:Login ={
    rut:"",
    password:""

  }

 

  constructor(private router:Router,
    private http:HttpClient,
    private servicio: ServiciosService
    ) {
      this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data: any) => {
        this.paises = data;
        console.log(data);
      })
     }


  getIp(ip:string){
    this.user.apikey=ip;
    console.log(this.user.apikey);

  }
 

   logiar(){
    console.log(this.user);
    this.servicio.ingresar(this.user)
    .subscribe((data: any) =>{
      console.log("antes de la asignacion");
      console.log(this.key);    
      this.key=data.apiKey;
      this.user.apikey=data.apiKey;
      console.log("despues de la asignacion");
      console.log(this.key);
      console.log(this.user.apikey);  
      
    },
    error => {alert("Datos Invalidos");
      console.error(error);
      
    }
           
      
    );    
    
    //this.router.navigate(['home']);
  }

  

  ngOnInit() {
  }

}
