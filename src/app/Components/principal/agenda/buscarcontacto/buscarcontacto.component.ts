import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';
import { registrarcontactoInter } from 'src/app/Ifaz/agendaInter';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-buscarcontacto',
  templateUrl: './buscarcontacto.component.html',
  styleUrls: ['./buscarcontacto.component.css']
})
export class BuscarcontactoComponent implements OnInit {
  registros: registrarcontactoInter[] = [];
  originalRegistros: registrarcontactoInter[] = [];
  sortBy: string = 'tipo';
  searchTerm: string = '';

  constructor(private _rregistro: AgendaService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros(): void {
    this._rregistro.getregistros().subscribe(
      (data) => {
        this.registros = data;
        this.originalRegistros = [...data];
        this.sortData();
        this.applyFilter();
      },
      (error) => {
        console.error('Error al recuperar los registros:', error);
      }
    );
  }

  applyFilter(): void {
    // Filtrar los registros según el término de búsqueda
    const searchTerm = this.searchTerm.toLowerCase();
    this.registros = this.originalRegistros.filter((registro) => {
    //this.registros = this.registros.filter((registro) => {
      return (
        registro.nombre.toLowerCase().includes(searchTerm) ||
        registro.tipo.toLowerCase().includes(searchTerm) ||
        registro.email.toLowerCase().includes(searchTerm) ||
        registro.telefono.toLowerCase().includes(searchTerm) ||
        registro.ci.toLowerCase().includes(searchTerm) ||
        registro.extension.toLowerCase().includes(searchTerm) ||
        registro.direccion.toLowerCase().includes(searchTerm)
      );
    });
  }

  sortData(): void {
    if (this.sortBy === 'tipo') {
      this.registros.sort((a, b) => a.tipo.localeCompare(b.tipo));
    } else if (this.sortBy === 'nombre') {
      this.registros.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (this.sortBy === 'id') {
      this.sortById();
    }
  }

  sortById(): void {
    this.registros.sort((a, b) => (a.id && b.id ? a.id - b.id : 0));
  }

  setSortBy(sortBy: string): void {
    this.sortBy = sortBy;
    this.sortData();
  }

  formatDate(date: Date | string | null): string {
    if (typeof date === 'string') {
      // Convertir la cadena a un objeto Date
      date = new Date(date);
    }
    return date ? this.datePipe.transform(date, 'yyyy-MM-dd') ?? '' : '';
  }
  clearFilter(): void {
    this.searchTerm = ''; // Restablecer el término de búsqueda
    //this.applyFilter(); // Volver a aplicar el filtro para mostrar todos los registros
    this.registros = [...this.originalRegistros]; // Restaurar la lista de registros original
  }
}
