import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcontactoInter } from '../Ifaz/agendaInter';
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


  //constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
  getregistros(): Observable<registrarcontactoInter[]> {
     
    return this.http.get<registrarcontactoInter[]>(this.Myappurl+this.Myapiurl);
  }



  addregistro  (regd: registrarcontactoInter): Observable<registrarcontactoInter>{

    return this.http.post<registrarcontactoInter>(`${this.Myappurl}${this.Myapiurl}`,regd);
  
  }

}