import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/service/comentario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentario-dialogo',
  templateUrl: './comentario-dialogo.component.html',
  styleUrls: ['./comentario-dialogo.component.css']
})
export class ComentarioDialogoComponent implements OnInit{
  constructor(private aS: ComentarioService,
    private dialogRef: MatDialogRef<ComentarioDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
