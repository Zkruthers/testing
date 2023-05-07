import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioCreaeditaComponent } from './component/comentario/comentario-creaedita/comentario-creaedita.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      {
        path: 'nuevo', component: UsuarioCreaeditaComponent
      },
      {
        path: 'edicion/:id', component: UsuarioCreaeditaComponent
      }
    ]
  },
  {
    path: 'comentarios',
    component: ComentarioComponent,
    children: [
      {
        path: 'nuevo', component: ComentarioCreaeditaComponent
      },
      {
        path: 'edicion/:id', component: ComentarioCreaeditaComponent
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
