import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  private url = `${base_url}/usuario`

  //método listar
  list() {
    return this.http.get<Usuario[]>(this.url)
  }


  //método insertar
  insert(usuario: Usuario) {
    return this.http.post(this.url, usuario)
  }

  private listaCambio = new Subject<Usuario[]>()

  setList(listaNueva: Usuario[]) {
    this.listaCambio.next(listaNueva)
  }

  getList() {
    return this.listaCambio.asObservable()
  }


  //métodos para actualizar

  listId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  update(usu: Usuario) {
    return this.http.put(this.url + "/" + usu.id, usu)
  }

  //método para eliminar

  private confirmarEliminacion = new Subject<Boolean>()

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable()
  }

  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado)
  }


}
