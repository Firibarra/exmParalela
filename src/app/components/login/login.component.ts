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
  codeSeled:number;
  medifiText:string;
  public key:any[]=[];
  paises: any[]=[];
  cursos:any[]= [];
  algo:string;
  

  user:Login ={
    rut:"",
    password:""
  }

   
  onEmSelecd(val:any){
    this.customFunction(val);
  }
  customFunction(val:any){
    this.medifiText= "el valor " + val + " seleccionado";
  }

 

  constructor(private router:Router,
    private http:HttpClient,
    public servicio: ServiciosService
    ) {
      this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data: any) => {
        this.paises = data;
        console.log(data);
      })
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
      localStorage.setItem("key", this.user.apikey);
      let algo = localStorage.getItem("key");
      console.log(algo);
      
      this.router.navigate(['home']);
      //
      

      //this.router.navigate(['home']);
      
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
