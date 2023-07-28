import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from 'src/app/Services/personal.service';
import { HttpClient } from '@angular/common/http';
import { registrarpersonalInter  } from 'src/app/Ifaz/personal';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-crearpersonal',
  templateUrl: './crearpersonal.component.html',
  styleUrls: ['./crearpersonal.component.css']
})
export class CrearpersonalComponent implements OnInit {
  formulario: FormGroup;
  showAlert: boolean = false;
 
  closeAlert(): void {
    this.showAlert = false;
  }


  constructor(
    private fb: FormBuilder,
   
    private _rregistro: PersonalService,
    private router: Router,
    //private _snackBar: MatSnackBar,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nombrepersonal: ['', Validators.required],
      tipopersonal: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      ci: ['', Validators.required],
      extension: [''],
      fechanac: [''],
      fechainco: [''],
      estado: [''],
      nrotitulo: [''],
      graduacion: [''],
      nombretitulo: [''],
      especialidad: [''],
      direccion: [''],

 
         });
  }

  registrarusuario() {
     
      const rcactivo: registrarpersonalInter = {
       
        nombrepersonal: this.formulario.value.nombrepersonal,
        tipopersonal: this.formulario.value.tipopersonal,
        email: this.formulario.value.email,
        telefono: this.formulario.value.telefono,
        ci: this.formulario.value.ci,
        extension: this.formulario.value.extension,
       // FechaNacimiento: new Date(this.formulario.value.FechaNacimiento).toISOString(), // Convertir a formato ISO
       fechanac: this.formulario.value.fechanac,
       fechainco: this.formulario.value.fechainco,
       estado: this.formulario.value.estado,
       nrotitulo: this.formulario.value.nrotitulo,
       graduacion: this.formulario.value.graduacion,
       nombretitulo: this.formulario.value.nombretitulo,
       especialidad: this.formulario.value.especialidad,
       direccion: this.formulario.value.direccion,


      };
  
      // Enviamos objeto al backend
      this._rregistro.addregistro(rcactivo).subscribe(() => {
        this.showSuccessAlert(); 
        //this.mensajeExito('registrado');
        setTimeout(() => {
          location.reload();
        }, 2000); // Wait for 2 seconds before reloading the page
      });
   // });
}
showSuccessAlert(): void {
  this.showAlert = true;
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

