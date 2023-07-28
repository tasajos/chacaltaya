import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../../Services/agenda.service'; // Reemplaza 'ruta-a-tu-servicio' con la ruta real a tu servicio
import { tipocontactoInter } from '../../../Ifaz/agendaInter'; // Reemplaza 'ruta-a-tu-modelo' con la ruta real a tu interfaz de tipocontacto

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {
  tipos: tipocontactoInter[] = [];
  selectedTipo: string = ''; // Agrega esta línea para definir la variable selectedTipo
  constructor(private lectipo: AgendaService) { }

  ngOnInit() {
    this.getTipos();
  }

  getTipos() {
    this.lectipo.getregistrostipo().subscribe(
      (data) => {
        this.tipos = data;
        console.log('Tipos de contacto:', this.tipos); // Agrega este mensaje para ver los datos obtenidos
      },
      (error) => {
        console.error(error);
      }
    );
  }
}