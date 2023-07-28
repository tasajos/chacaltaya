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
  sortBy: string = 'tipo';

  constructor(private _rregistro: AgendaService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros(): void {
    this._rregistro.getregistros().subscribe(
      (data) => {
        this.registros = data;
        this.sortData();
      },
      (error) => {
        console.error('Error al recuperar los registros:', error);
      }
    );
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
}
