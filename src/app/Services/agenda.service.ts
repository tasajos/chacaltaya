import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcontactoInter,tipocontactoInter } from '../Ifaz/agendaInter';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

 //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Agenda';
  private Myapiurput: string = 'api/Agenda';
  private Myapigtipo: string = 'api/Agenda/tipos';
  private Myapigtipodtipo: string = 'api/Agenda/tipos/{tipo}';

  


  //constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
 
  getregistros(): Observable<registrarcontactoInter[]> {
     
   return this.http.get<registrarcontactoInter[]>(this.Myappurl+this.Myapiurl);
  }

   //funcion obtener tipo
 
   getregistrostipo(): Observable<tipocontactoInter[]> {
     
    return this.http.get<tipocontactoInter[]>(this.Myappurl+this.Myapigtipo);
   }

    //funcion obtener tipo x tipo
 
    //getregistrostipoxtipo(): Observable<registrarcontactoInter[]> {
     
      //return this.http.get<registrarcontactoInter[]>(this.Myappurl+this.Myapigtipodtipo);
     //}
 
     getregistrostipoxtipo(tipo: string): Observable<string[]> {
      return this.http.get<string[]>(`${this.Myappurl}api/Agenda/tipos/${tipo}`);
    }

  
  addregistro  (regd: registrarcontactoInter): Observable<registrarcontactoInter>{

    return this.http.post<registrarcontactoInter>(`${this.Myappurl}${this.Myapiurput}`,regd);
  
  }



}