import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import {NgForm, NgModel} from '@angular/forms';
import {Login} from '../../interfaces/modelos.interface';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  paises: any[]=[];

  user:Login ={
    rut:"",
    clave:""
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
 

  Ingresar(rut:string, clave:string){    
    //console.log(rut,clave);
    console.log(this.user);
    this.router.navigate(['home']);
    }
  logiar(){
    console.log(this.user);

  }

  ngOnInit() {
  }

}
