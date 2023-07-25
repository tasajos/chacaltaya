import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Components/login/login.component';
import { PrincipalComponent  } from './Components/principal/principal.component';
import { SidebarComponent  } from './Components/sidebar/sidebar.component';
import { AgendaComponent } from './Components/principal/agenda/agenda.component';
import { CrearcontactoComponent } from './Components/principal/agenda/crearcontacto/crearcontacto.component';
import { BuscarcontactoComponent } from './Components/principal/agenda/buscarcontacto/buscarcontacto.component';
import { CasosComponent } from './Components/principal/casos/casos.component';
import { SeguimientoComponent } from './Components/principal/seguimiento/seguimiento.component';
import { NavbaragendaComponent } from './Components/principal/agenda/navbaragenda/navbaragenda.component';
import { CcasosComponent } from './Components/principal/casos/ccasos/ccasos.component';
import { RcasosComponent } from './Components/principal/casos/rcasos/rcasos.component';
import { NavbarcasosComponent } from './Components/principal/casos/navbarcasos/navbarcasos.component';
import { PersonalComponent } from './Components/principal/personal/personal.component';
import { NavbarpersonalComponent } from './Components/principal/personal/navbarpersonal/navbarpersonal.component';
import { CrearpersonalComponent } from './Components/principal/personal/crearpersonal/crearpersonal.component';
import { ListadopersonalComponent } from './Components/principal/personal/listadopersonal/listadopersonal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SidebarComponent,
    AgendaComponent,
    CrearcontactoComponent,
    BuscarcontactoComponent,
    CasosComponent,
    SeguimientoComponent,
    NavbaragendaComponent,
    CcasosComponent,
    RcasosComponent,
    NavbarcasosComponent,
    PersonalComponent,
    NavbarpersonalComponent,
    CrearpersonalComponent,
    ListadopersonalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
