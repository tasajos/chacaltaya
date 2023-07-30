import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subirarchivo',
  templateUrl: './subirarchivo.component.html',
  styleUrls: ['./subirarchivo.component.css']
})
export class SubirarchivoComponent {

  showModal = false;
  archivoCargado = false;
  constructor(private storage: AngularFireStorage ) { }

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
            
             // Muestra el mensaje de éxito
             this.archivoCargado = true;
             // Después de 1 segundo, oculta el mensaje
            setTimeout(() => {
              this.archivoCargado = false;
            }, 1000);
            // Aquí puedes realizar acciones con la URL del archivo, por ejemplo, guardarla en la base de datos, mostrarla en la interfaz, etc.
          });
        })
      ).subscribe();
    } else {
      console.log('No se seleccionó ningún archivo.');
    }
  }
  
  
}