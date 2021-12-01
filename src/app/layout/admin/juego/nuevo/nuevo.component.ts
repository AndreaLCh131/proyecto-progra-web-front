import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  Idgenerado;
  constructor() { }

  ngOnInit(): void {
  }
  generarId(){
    this.Idgenerado = Math.floor(Math.random()* 1000000);
  }
}
