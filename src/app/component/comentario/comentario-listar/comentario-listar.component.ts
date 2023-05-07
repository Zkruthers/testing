import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ComentarioDialogoComponent } from './comentario-dialogo/comentario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-comentario-listar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css'],
})
export class ComentarioListarComponent implements OnInit, AfterViewInit {
  Lista: Comentario[] = [];
  dataSource: MatTableDataSource<Comentario> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'fecha',
    'descripcion',
    'publicacion',
    'accion01',
    'accion02'
  ];
  constructor(private aS: ComentarioService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator
    });

    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator
    });

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ComentarioDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  @ViewChild(MatPaginator, {static: true}) paginator!:  MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
