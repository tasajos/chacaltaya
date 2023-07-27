import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/Services/agenda.service';
import { HttpClient } from '@angular/common/http';
import {registrarcontactoInter  } from 'src/app/Ifaz/agendaInter';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.css']
})
export class CrearcontactoComponent implements OnInit {
  formulario: FormGroup;
  
 

  constructor(
    private fb: FormBuilder,
   
    private _rregistro: AgendaService,
    private router: Router,
    //private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      ci: ['', Validators.required],
      extension: [''],
      fechanacimiento: [''],
      estadocivil: [''],
      direccion: [''],
 
         });
  }

  registrarusuario() {
     
      const rcactivo: registrarcontactoInter = {
       
        nombre: this.formulario.value.nombre,
        tipo: this.formulario.value.tipo,
        email: this.formulario.value.email,
        telefono: this.formulario.value.telefono,
        ci: this.formulario.value.ci,
        extension: this.formulario.value.extension,
        fechanacimiento: this.formulario.value.fechanacimiento,
        estadocivil: this.formulario.value.estadocivil,
        direccion: this.formulario.value.direccion,

      };
  
      // Enviamos objeto al backend
      this._rregistro.addregistro(rcactivo).subscribe(() => {
        //this.mensajeExito('registrado');
     
        setTimeout(() => {
          location.reload();
        }, 2000); // Wait for 2 seconds before reloading the page
      });
   // });
    
 
}

 //
  //mensajeExito(texto: string) {
    //this._snackBar.open(`El proceso fue realizado y ${texto} con exito`, '', {
   // duration: 2000,
   // horizontalPosition: 'right',
  //  });
    

  ngOnInit(): void {
//const fechaActual = new Date().toLocaleDateString();
    //this.formulario.patchValue({ fechasd: fechaActual });
   // Lógica del campo
 
   // Lógica del campo
}



}

