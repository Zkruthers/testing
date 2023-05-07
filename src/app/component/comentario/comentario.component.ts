import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {

  }


}
