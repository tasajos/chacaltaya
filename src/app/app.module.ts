import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfazComponent } from './Components/interfaz/interfaz.component';
import { LoginComponent } from './Components/login/login.component';
import { PrincipalComponent } from './Components/Interfaz/principal/principal.component';
import { PrincipalBComponent } from './Components/Interfaz/principal-b/principal-b.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfazComponent,
    LoginComponent,
    PrincipalComponent,
    PrincipalBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
