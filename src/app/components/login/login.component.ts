import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import {NgForm, NgModel} from '@angular/forms';
import { Login } from '../../interfaces/modelos.interface';
import { first } from 'rxjs/operators';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Declaracion de algunas variables
  codeSeled:number;
  medifiText:string;
  public key:any[]=[];
  cursos:any[]= [];
  algo:string;
  //Declaracion del modulo
  user:Login ={
    rut:"",
    password:""
  }
   
  constructor(private router:Router,
    private http:HttpClient,
    public servicio: ServiciosService) {     
     }
//Funcion Para realizar la funcion post de 
   logiar(){
    console.log(this.user);
    this.servicio.ingresar(this.user)
    .subscribe((data: any) =>{
      this.key=data.apiKey;
      this.user.apikey=data.apiKey;
      localStorage.setItem("key", this.user.apikey);
      let algo = localStorage.getItem("key");
      console.log(algo);
      //Paso a al home
      this.router.navigate(['home']);
      
    },
    error => {alert("Datos Invalidos");
      console.error(error);
      
    }
           
      
    );    
    
    
  }

  

  ngOnInit() {
  }

}
