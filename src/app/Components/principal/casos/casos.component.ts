import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../../../Services/agenda.service';
import { PersonalService } from '../../../Services/personal.service';
import { CasosService } from '../../../Services/casos.service';
import { tipocontactoInter, registrarcontactoInter } from '../../../Ifaz/agendaInter';
import { registrarpersonalInter } from '../../../Ifaz/personal';
import { registrarcasosInter } from '../../../Ifaz/casos';


@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {
  formulario: FormGroup;
  showAlert: boolean = false;
  tipos: tipocontactoInter[] = [];
  nombresPorTipo: string[] = []; // Agrega esta variable para almacenar los nombres por tipo
  selectedTipo: string = '';
  selectedNombre: string = '';
  especialidades: string[] = [];
  abogadosPorEspecialidad: string[] = [];
  selectedEspecialidad: string = '';
  selectedAbogado: string = '';
  archivos: File[] = [];

  closeAlert(): void {
    this.showAlert = false;
  }

  constructor(
  private lectipo: AgendaService, private lecesp:PersonalService,
  private fb: FormBuilder, private _rregistro: CasosService,
  private router: Router, private http: HttpClient,
  private route: ActivatedRoute)
  {

    this.formulario = this.fb.group({
      clientetipo: ['', Validators.required],
      cliente: ['', Validators.required],
      especialidad: ['', Validators.required],
      abogado: ['', Validators.required],
      fecharegistro: ['', Validators.required],
      tipocaso: [''],
      fechasuceso: [''],
      ubicacion: [''],
      nombrepartesinv: [''],
      descripcioncaso: [''],
 
         });

   }

   handleFileInput(event: any) {
    this.archivos = event.target.files;
  }

   registrarusuario() {
     
    const rcactivo: registrarcasosInter = {
     
      clientetipo: this.formulario.value.clientetipo,
      cliente: this.formulario.value.cliente,
      especialidad: this.formulario.value.especialidad,
      abogado: this.formulario.value.abogado,
      fecharegistro: this.formulario.value.fecharegistro,
      tipocaso: this.formulario.value.tipocaso,
     // FechaNacimiento: new Date(this.formulario.value.FechaNacimiento).toISOString(), // Convertir a formato ISO
     fechasuceso: this.formulario.value.fechasuceso,
     ubicacion: this.formulario.value.ubicacion,
     nombrepartesinv: this.formulario.value.nombrepartesinv,
     descripcioncaso: this.formulario.value.descripcioncaso,
     

    };

    


     
   
    // Enviamos objeto al backend
    this._rregistro.addregistro(rcactivo).subscribe(() => {
      this.showSuccessAlert(); 
      //this.mensajeExito('registrado');
      setTimeout(() => {
       location.reload();
      }, 2000); // Wait for 2 seconds before reloading the page
    });
  
 



}
showSuccessAlert(): void {
this.showAlert = true;
}



  ngOnInit() {
    this.getTipos();
    this.getEspecialidades();
  }

  getTipos() {
    this.lectipo.getregistrostipo().subscribe(
      (data) => {
        this.tipos = data;
        console.log('Tipos de contacto:', this.tipos);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getNombresPorTipo() {
    if (this.selectedTipo) {
      this.lectipo.getregistrostipoxtipo(this.selectedTipo).subscribe(
        (data) => {
          this.nombresPorTipo = data;
          console.log('Nombres por tipo:', this.nombresPorTipo);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.nombresPorTipo = [];
    }
  }
  getEspecialidades() {
    this.lecesp.getEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
        console.log('Especialidades:', this.especialidades);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAbogadosPorEspecialidad() {
    if (this.selectedEspecialidad) {
      this.lecesp.getAbogadosPorEspecialidad(this.selectedEspecialidad).subscribe(
        (data) => {
          this.abogadosPorEspecialidad = data;
          console.log('Abogados por especialidad:', this.abogadosPorEspecialidad);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.abogadosPorEspecialidad = [];
    }
  }
}
