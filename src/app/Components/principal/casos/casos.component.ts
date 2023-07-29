import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../Services/agenda.service';
import { tipocontactoInter, registrarcontactoInter } from '../../../Ifaz/agendaInter';

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

  constructor(private lectipo: AgendaService) { }

  ngOnInit() {
    this.getTipos();
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
}
