import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

//Rutas
import{ APP_ROUTING } from './app.routes';
 
//Servicios


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
//servicios
import { ServiciosService } from './services/servicios.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
