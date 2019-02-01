import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import {NgForm, NgModel} from '@angular/forms';
import { Login, Codigo } from '../../interfaces/modelos.interface';
import { first, map } from 'rxjs/operators';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codeSeled:number;
  medifiText:string;
  public años:Array<any> = [];
  public promedio:Array<any> = [];
  cod:Codigo ={
    codi:""
  };
  
  public cursos:any[]= [];
  public cursos2:any[]= [];
  public valores:any[]= [];
  public fecha:Array<any>;



  public lineChartData:Array<any> = [
    {data: [], label: 'Promedio Ranking Por Año'},
    {data: [], label: 'Desviación Ranking Por Año '},
    {data: [], label: 'Promedio Ranking Año Por Curso'},
    {data: [], label: 'Desviación Ranking Año Por Curso'}
  ];
  //Años del Grafico y tabla
  public lineChartLabels:Array<any> = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
  //Arreglo auxiliar para poder rellenar la data
  public notas:Array<any> = [1,2,3,4];
  public notas1:Array<any> = [1,2,3,4];

  public lineChartOptions:any = {
  responsive: true
  };
  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  

  constructor(private router:Router,
    private http:HttpClient,
    public servicio: ServiciosService) { 

    }
   
  rankin_code(aux:string)
  {
    console.log("ENTRO A LA FUNCION");
    console.log(aux);
    this.servicio.rank_Anio_Curso(localStorage.getItem("key"),aux).subscribe((data:any)=>{
      this.cursos2=data;
      console.log(data);
      const año1 = data.map(data => data.year);
      const promedio1 = data.map (data => data.average);
      const desvia1 = data.map (data => data.stddev);
      //Al grafico
      //this.lineChartLabels.splice(0, this.lineChartLabels.length);
      this.notas1.splice(0, this.notas.length);
      this.lineChartLabels = año1;
      this.notas1= promedio1;
      this.lineChartData[2].data= this.notas1;
      this.lineChartData[3].data= desvia1;

    })
  }
      

  ngOnInit() { 
     this.servicio.getcursos(localStorage.getItem("key"))
      .subscribe((rest : any) =>{
        this.cursos= rest;
        console.log(rest);
      }) 
      this.servicio.rank_Anio(localStorage.getItem("key"))
      .subscribe((data : any)=>{
        console.log(data);
        const año = data.map(data => data.year);
        const promedio = data.map (data => data.average);
        const desvia = data.map (data => data.stddev);
        //AL Grafico
        this.lineChartLabels.splice(0, this.lineChartLabels.length);
        this.notas.splice(0, this.notas.length);
        this.lineChartLabels = año;
        this.notas= promedio;
        this.lineChartData[0].data= this.notas;
        this.lineChartData[1].data= desvia;
        //this.lineChartData[0].label="AÑOS";
        }
        



          
       ) }

     
      
  

}
