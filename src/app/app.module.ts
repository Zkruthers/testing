import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { UsuarioDialogoComponent } from './component/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component'
import { MatDialogModule } from '@angular/material/dialog'


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './component/navbar/navbar.component';

import { ComentarioComponent } from './component/comentario/comentario.component';
import { ComentarioListarComponent } from './component/comentario/comentario-listar/comentario-listar.component';
import { ComentarioDialogoComponent } from './component/comentario/comentario-listar/comentario-dialogo/comentario-dialogo.component';
import { ComentarioCreaeditaComponent } from './component/comentario/comentario-creaedita/comentario-creaedita.component';


import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { InicioComponent } from './component/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    NavbarComponent,
    ComentarioComponent,
    ComentarioListarComponent,
    ComentarioDialogoComponent,
    ComentarioCreaeditaComponent,
    InicioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
