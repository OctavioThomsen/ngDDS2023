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
  curso: Curso = <Curso><unknown>{
    nombre: '',
    fechaInicio: new Date().toISOString().split('T')[0],
    idDocente: 1,
    tema: {
      id: 2
    }
  };
  temas: any[] = [];
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
      tema: 2
    };
  }
  
  getTemas(): void {
    this.temaService.getAll()
      .subscribe({
        next: (res) => {
          this.temas = res;
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        } 
      });
  }
}
