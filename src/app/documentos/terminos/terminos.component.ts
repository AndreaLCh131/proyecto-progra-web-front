import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent implements OnInit {

  page: string;
  constructor(private route: ActivatedRoute,   private router: Router) { 
    this.page = "";
  }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.page = this.route.snapshot.queryParams['page'] || 'layout/bienvenida';
  }
  loggearCliente(){

    this.router.navigate([this.page]);
  }
}
