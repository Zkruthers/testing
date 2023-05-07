import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { MatTableDataSource } from '@angular/material/table'
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog'
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit, AfterViewInit {
  //lista: Usuario[] = []

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();

  displayedColumns: string[] = ['codigo', 'nombres', 'apellidos', 'email', 'telefono', 'accion01', 'accion02']

  constructor(private uS: UsuarioService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
    })

    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
    })

    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }


  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim()
  }



  idMayor: number = 0

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }


  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }


  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator

  }

}
