import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.css']
})
export class CursoAddComponent implements OnInit {
  curso: Curso = <Curso>{
    nombre: '',
    fechaInicio: new Date(),
    idDocente: 1, //campo obligatorio
    tema: {
            id: 2 //campo obligatorio
        } };
  temas: any[] = []; // Variable para almacenar la lista de temas
  submitted = false;
  
  constructor(
    private cursoService: CursoService,
    private temaService: TemaService) { }
  
  ngOnInit(): void {
    this.getTemas();
  }
  
  saveCurso(): void {
    const data = {
      "id": this.curso.id,
      "nombre": this.curso.nombre,
      "fechaInicio": this.curso.fechaInicio,
      "idDocente": this.curso.idDocente,
      "tema": {
        id: this.curso.tema
      }
    };
    
    this.cursoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => {
          console.error(e);
        } 
      });
  }
  
  newCurso(): void {
    this.submitted = false;
    this.curso = <Curso>{
      nombre: '',
      fechaInicio: new Date(),
      idDocente: 1,
      tema: 2 // Puedes establecer un valor por defecto para el tema aquí si es necesario
    };
  }
  
  getTemas(): void {
    this.temaService.getAll()
      .subscribe({
        next: (res) => {
          this.temas = res; // Almacena la lista de temas en la variable 'temas'
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        } 
      });
  }
}
