import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comentario } from '../model/comentario';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private url = `${base_url}/Comentario`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Comentario[]>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Comentario[]>(this.url);
  }

  insert(comentario: Comentario) {
    return this.http.post(this.url, comentario);
  }

  setList(ListaNueva: Comentario[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Comentario>(`${this.url}/${id}`);
  }

  update(com: Comentario) {
    return this.http.put(this.url + '/' + com.id, com);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
