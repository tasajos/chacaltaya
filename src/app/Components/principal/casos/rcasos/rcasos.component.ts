import { Component, OnInit } from '@angular/core';
import { CasosService } from 'src/app/Services/casos.service';
import { registrarcasosInter } from 'src/app/Ifaz/casos';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rcasos',
  templateUrl: './rcasos.component.html',
  styleUrls: ['./rcasos.component.css']
})
export class RcasosComponent implements OnInit {
  casos: registrarcasosInter[] = [];
  originalCasos: registrarcasosInter[] = []; // Lista para almacenar la copia original de casos
  searchTerm: string = '';

  constructor(private _rcasos: CasosService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getCasos();
  }

  getCasos(): void {
    this._rcasos.getregistros().subscribe(
      (data) => {
        this.casos = data;
        this.originalCasos = [...data]; // Hacer una copia de los casos originales
        this.applyFilter(); // Aplicar el filtro de búsqueda inicialmente
      },
      (error) => {
        console.error('Error al recuperar los casos:', error);
      }
    );
  }

  formatDate(date: Date | string | null): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date ? this.datePipe.transform(date, 'yyyy-MM-dd') ?? '' : '';
  }

  applyFilter(): void {
    const searchTerm = this.searchTerm.toLowerCase();
    this.casos = this.originalCasos.filter((caso) => {
      return (
        caso.especialidad.toLowerCase().includes(searchTerm) ||
        (caso.codigocaso && caso.codigocaso.toLowerCase().includes(searchTerm)) ||
        caso.abogado.toLowerCase().includes(searchTerm) ||
        (caso.fechasuceso && this.formatDate(caso.fechasuceso).toLowerCase().includes(searchTerm)) ||
        caso.cliente.toLowerCase().includes(searchTerm)
      );
    });
  }

  clearFilter(): void {
    this.searchTerm = '';
    this.casos = [...this.originalCasos]; // Restaurar la lista de casos original
  }
}