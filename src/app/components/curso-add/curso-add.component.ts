import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';



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
        }
  };
  submitted = false;
  
  constructor(private cursoService: CursoService) { }
  ngOnInit(): void {
  }
  saveCurso(): void {
	const data = {
		"id": this.curso.id,
    	"nombre": this.curso.nombre,
    	"fechaInicio": this.curso.fechaInicio,
    	"idDocente": this.curso.idDocente ,
    	"tema": this.curso.tema
	};	
    this.cursoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) =>
        {
        	console.error(e);
		} 
      });
  }
  newCurso(): void {
    this.submitted = false;
    this.curso = <Curso>{
    	nombre: '',
    	fechaInicio: new Date(),
    	idDocente: 1, //campo obligatorio
    	tema: {
            id: 2 //campo obligatorio
        }
    };
  }

}

