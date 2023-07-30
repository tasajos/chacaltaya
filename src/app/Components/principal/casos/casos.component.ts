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
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {
  formulario: FormGroup;
  showAlert: boolean = false;
  archivoCargado = false;
  uploadedFileUrl: string = '';
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
  private route: ActivatedRoute,
  private storage: AngularFireStorage
  )
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
      ruta: [''],
 
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
     ruta: this.formulario.value.ruta,

     
     

    };

    console.log(this.formulario.value.ruta);


     
   
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
  uploadFile(fileInput: any) {
    const file = fileInput.files[0];
    if (file) {
      const filePath = `ruta_del_archivo/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      // Opcional: Muestra el progreso de la carga (porcentaje)
      task.percentageChanges().subscribe((percentage) => {
        console.log(`Cargando... ${percentage}%`);
      });

      // Finaliza la carga y obtén la URL del archivo
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((downloadURL) => {
            console.log('Archivo cargado:', downloadURL);
            // Establece la variable uploadedFileUrl con la URL descargada

            const rutaControl = this.formulario.get('ruta');
        if (rutaControl) {
            this.uploadedFileUrl = downloadURL;
            this.formulario.get('ruta')!.setValue(downloadURL); // Asigna la URL al campo 'ruta' en el formulario
             // Muestra el mensaje de éxito
             this.archivoCargado = true;
             // Después de 1 segundo, oculta el mensaje
            setTimeout(() => {
              this.archivoCargado = false;
            }, 1000);
            // Aquí puedes realizar acciones con la URL del archivo, por ejemplo, guardarla en la base de datos, mostrarla en la interfaz, etc.
          }
        });
      })
      ).subscribe();
    } else {
      console.log('No se seleccionó ningún archivo.');
    }
  }
}
