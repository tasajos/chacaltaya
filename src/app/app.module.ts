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
    SeguimientoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
