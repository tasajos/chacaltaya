import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/Services/personal.service';
import { registrarpersonalInter } from 'src/app/Ifaz/personal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listadopersonal',
  templateUrl: './listadopersonal.component.html',
  styleUrls: ['./listadopersonal.component.css']
})
export class ListadopersonalComponent implements OnInit {
  registros: registrarpersonalInter[] = [];
  originalRegistros: registrarpersonalInter[] = [];
  sortBy: string = 'tipo';
  searchTerm: string = '';

  constructor(private _rregistro: PersonalService, private datePipe: DatePipe) {}

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
        registro.nombrepersonal.toLowerCase().includes(searchTerm) ||
        registro.tipopersonal.toLowerCase().includes(searchTerm) ||
        registro.email.toLowerCase().includes(searchTerm) ||
        registro.telefono.toLowerCase().includes(searchTerm) ||
        registro.ci.toLowerCase().includes(searchTerm) ||
        registro.nrotitulo.toLowerCase().includes(searchTerm) ||
        registro.especialidad.toLowerCase().includes(searchTerm) ||
        registro.fechainco.toLowerCase().includes(searchTerm) ||
        registro.direccion.toLowerCase().includes(searchTerm)
      );
    });
  }

  sortData(): void {
    if (this.sortBy === 'tipopersonal') {
      this.registros.sort((a, b) => a.tipopersonal.localeCompare(b.tipopersonal));
    } else if (this.sortBy === 'nombrepersonal') {
      this.registros.sort((a, b) => a.nombrepersonal.localeCompare(b.nombrepersonal));
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

