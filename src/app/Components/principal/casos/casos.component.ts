import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../Services/agenda.service';
import { PersonalService } from '../../../Services/personal.service';
import { tipocontactoInter, registrarcontactoInter } from '../../../Ifaz/agendaInter';
import { registrarpersonalInter } from '../../../Ifaz/personal';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {
  tipos: tipocontactoInter[] = [];
  nombresPorTipo: string[] = []; // Agrega esta variable para almacenar los nombres por tipo
  selectedTipo: string = '';
  selectedNombre: string = '';

  especialidades: string[] = [];
  abogadosPorEspecialidad: string[] = [];
  selectedEspecialidad: string = '';
  selectedAbogado: string = '';

  constructor(private lectipo: AgendaService, private lecesp:PersonalService) { }

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
