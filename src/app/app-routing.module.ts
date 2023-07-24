import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfazComponent } from './Components/interfaz/interfaz.component';


const routes: Routes = [
  {path: '', redirectTo:'principal',pathMatch:'full'},
  {path: 'principal', component:InterfazComponent},
  {path: '**', redirectTo: 'principal', pathMatch:'full'}


   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
