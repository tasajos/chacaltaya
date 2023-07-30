import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa el módulo de animaciones

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DatePipe } from '@angular/common';

//google
import { AngularFireModule } from '@angular/fire/compat'; // Asegúrate de agregar '/compat' aquí
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importa el módulo de autenticación
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Asegúrate de agregar '/compat' aquí
import { environmentfirebase } from '../environments/firebase';

//toast
import { ToastrModule } from 'ngx-toastr'; // Importa el módulo ToastrModule

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
import { BannerComponent } from './Components/banner/banner.component';
import { SubirarchivoComponent } from './Components/principal/subirarchivo/subirarchivo.component';


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
    ListadopersonalComponent,
    BannerComponent,
    SubirarchivoComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DatePipe,
    ToastrModule.forRoot(), // ToastrModule agregado
    AngularFireModule.initializeApp(environmentfirebase.firebaseConfig)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
