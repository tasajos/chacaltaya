import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarcasosInter } from '../Ifaz/casos';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasosService {

 //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Personal';
  private Myapiurput: string = 'api/Personal';
  private Myapiurputcasos: string = 'api/Casos';
  private Myapiurgetcasos: string = 'api/Casos';


  //constructor
  constructor(private http: HttpClient) { }

  //funcion obtener resultados
 
  getregistros(): Observable<registrarcasosInter[]> {
     
   return this.http.get<registrarcasosInter[]>(this.Myappurl+this.Myapiurgetcasos);
  }

  addregistro  (regd: registrarcasosInter): Observable<registrarcasosInter>{

    return this.http.post<registrarcasosInter>(`${this.Myappurl}${this.Myapiurputcasos}`,regd);
  
  }

  addregistro2(regd: FormData): Observable<registrarcasosInter> {
    return this.http.post<registrarcasosInter>(`${this.Myappurl}${this.Myapiurputcasos}`, regd);
  }

  addregistro3(formData: FormData) {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=boundary123' });
    return this.http.post<any>(`${this.Myappurl}${this.Myapiurputcasos}`, formData,{ headers });
  }

}