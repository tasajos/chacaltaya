import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { AgendaComponent } from './Components/principal/agenda/agenda.component';
import { CasosComponent } from './Components/principal/casos/casos.component';
import { SeguimientoComponent } from './Components/principal/seguimiento/seguimiento.component';
import { CrearcontactoComponent } from './Components/principal/agenda/crearcontacto/crearcontacto.component';
import { BuscarcontactoComponent } from './Components/principal/agenda/buscarcontacto/buscarcontacto.component';
import { CcasosComponent } from './Components/principal/casos/ccasos/ccasos.component';
import { RcasosComponent } from './Components/principal/casos/rcasos/rcasos.component';
import { PersonalComponent } from './Components/principal/personal/personal.component';
import { CrearpersonalComponent } from './Components/principal/personal/crearpersonal/crearpersonal.component';
import { ListadopersonalComponent } from './Components/principal/personal/listadopersonal/listadopersonal.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'casos', component: CasosComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
  { path: 'cagenda', component: CrearcontactoComponent },
  { path: 'bagenda', component: BuscarcontactoComponent },
  { path: 'ccasos', component: CcasosComponent },
  { path: 'rcasos', component: RcasosComponent },
  { path: 'personal', component: PersonalComponent},
  { path: 'cpersonal', component: CrearpersonalComponent},
  { path: 'lpersonal', component: ListadopersonalComponent},
  { path: '**', redirectTo: 'principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }