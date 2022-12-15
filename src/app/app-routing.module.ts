import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCategoriaDeleteComponent } from './components/views/categoria-categoria-delete/categoria-categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivrosReadAllComponent } from './components/views/livros-read-all/livros-read-all.component';
import { CategoriaUpdateComponent } from './componets/views/categoria/categoria-update/categoria-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent

  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaCategoriaDeleteComponent

  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent

  },
  {
    path: 'categorias/:id_cat/livros',
    component: LivrosReadAllComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
