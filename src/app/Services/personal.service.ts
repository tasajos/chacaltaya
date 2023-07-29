import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarpersonalInter } from '../Ifaz/personal';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

 //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Personal';
  private Myapiurput: string = 'api/Personal';


  //constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
 
  getregistros(): Observable<registrarpersonalInter[]> {
     
   return this.http.get<registrarpersonalInter[]>(this.Myappurl+this.Myapiurl);
  }


   //funcion obtener abogado por especialidad
  getAbogadosPorEspecialidad(especialidad: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.Myappurl}api/Personal/abogados-por-especialidad/${especialidad}`);
  }
//funcion obtener especialidades
  getEspecialidades(): Observable<string[]> {
    return this.http.get<string[]>(`${this.Myappurl}api/Personal/especialidades`);
  }

  addregistro  (regd: registrarpersonalInter): Observable<registrarpersonalInter>{

    return this.http.post<registrarpersonalInter>(`${this.Myappurl}${this.Myapiurl}`,regd);
  
  }

}