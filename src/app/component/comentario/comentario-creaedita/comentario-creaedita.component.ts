import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule  } from '@angular/forms';
import { Comentario } from 'src/app/model/comentario';


import * as moment from 'moment';
import { ComentarioService } from 'src/app/service/comentario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-comentario-creaedita',
  templateUrl: './comentario-creaedita.component.html',
  styleUrls: ['./comentario-creaedita.component.css'],
})
export class ComentarioCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  comentario: Comentario = new Comentario();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private aS: ComentarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      usuarioId: new FormControl(),
      descripcion: new FormControl(),
      publicacionId: new FormControl(),
    });
  }

  aceptar(): void {
    this.comentario.id = this.form.value['id'];
    this.comentario.usuarioId = this.form.value['usuarioId'];
    this.comentario.descripcion = this.form.value['descripcion'];
    this.comentario.publicacionId = this.form.value['publicacionId'];

    if (
      this.form.value['descripcion'].length > 0
    ) {
      if (this.edicion) {
        //actualice
        this.aS.update(this.comentario).subscribe(() => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        //registrar
        this.aS.insert(this.comentario).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }

      this.router.navigate(['comentarios']);
    }
  }

  //actualizar
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          usuarioId: new FormControl(data.usuarioId),
          descripcion: new FormControl(data.descripcion),
          publicacionId: new FormControl(data.publicacionId),
        });
      });
    }
  }
}
