import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { CursoAddComponent } from './components/curso-add/curso-add.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: 'cursos/:id', component: CursoDetailsComponent },
  { path: 'add', component: CursoAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
