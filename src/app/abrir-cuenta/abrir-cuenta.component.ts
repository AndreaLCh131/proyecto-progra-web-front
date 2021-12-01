import { Component, OnInit } from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidator } from '../shared/commons/form.validator';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-abrir-cuenta',
  templateUrl: './abrir-cuenta.component.html',
  styleUrls: ['./abrir-cuenta.component.scss']
})
export class AbrirCuentaComponent implements OnInit {

  items: MenuItem[];
  submitted: boolean = false;
  //Variables Formulario
  formRegistroCuenta: FormGroup;

  //nombres
  personalInformation: any;
  isNombre : boolean = true;
  //dni
  isDni : boolean = false;
  image: any;
  imagenCodificada: string;

  classes: any[];

  vagons: any[];
  
  seats: any[];
  seatInformation: any;
  url;
  //correo
  isCorreo : boolean = false;
  //ubigeo
  isUbigeo : boolean = false;
  listDepartamento: SelectItem[];
  listProvincia: SelectItem[];
  listDistrito: SelectItem[];
  //ppe
  isPpe : boolean = false;


  constructor( ) { }

  ngOnInit(): void {
    //     this.items = [{
    //       label: 'Paso 1',
    //       command: (event: any) => {
    //           this.activeIndex = 0;
    //       }
    //   },
    //   {
    //       label: 'Paso 2',
    //       command: (event: any) => {
    //           this.activeIndex = 1;
    //       }
    //   },
    //   {
    //       label: 'Paso 3',
    //       command: (event: any) => {
    //           this.activeIndex = 2;
    //       }
    //   },
    //   {
    //       label: 'Confirmation',
    //       command: (event: any) => {
    //           this.activeIndex = 3;
    //       }
    //   }
      
    //     ];

        //Seat
        this.classes = [
          {name: 'First Class', code: 'A', factor: 1},
          {name: 'Second Class', code: 'B', factor: 2},
          {name: 'Third Class', code: 'C', factor: 3}
      ];    


      this.personalInformation = {firstname: null, lastname: null , age: null };
      this.seatInformation = {class: null, wagon: null , seat: null };

      this.inicializarDatos();

    }    

  inicializarDatos(){
    this.formRegistroCuenta = new FormGroup({
        nombre: new FormControl("", [Validators.required, Validators.maxLength(50)]),
        apellidoPaterno: new FormControl("", [Validators.required, Validators.maxLength(50)]),
        apellidoMaterno: new FormControl("", [Validators.required, Validators.maxLength(50)]),
        dni: new FormControl("", [Validators.required, Validators.maxLength(15)]),
        direccion: new FormControl("", [Validators.required, Validators.maxLength(200),]),
        correo: new FormControl("", [FormValidator.formatoCorreo]),
        contrasena: new FormControl("", [Validators.required, Validators.maxLength(50)]),
        departamentoId: new FormControl(""),
        provinciaId: new FormControl(""),
        distritoId: new FormControl(""),
        flagisPep : new FormControl(false),
        flagisNotPep : new FormControl(false)
      });
    
      this.listDepartamento = [];
      // this.http.listar("/ubigeo/" + paisId + "/departamentos").subscribe(
      //   (data: IResultado) => {
      //     let list = Array<Departamento>();
      //     let obj;
      //     if (data) {
      //       for (const d of data.resultado) {
      //         obj = new Departamento();
      //         obj.copiar(d);
      //         list.push(obj);
      //       }
      //       list.forEach(objeto => {
      //         this.listDepartamento.push({ label: objeto.departamento, value: objeto.departamentoId });
      //       })
      //     }
      //   }
      // );
      //Cargar Combos
      this.listProvincia = [];
      this.listProvincia.push({ label: 'Ninguno', value: 0 });
      this.listDistrito = [];
      this.listDistrito.push({ label: 'Ninguno', value: 0 });


  }  
  
  //nombre 
  nextPageDni() {
      if (this.formRegistroCuenta.get("nombre").value && this.formRegistroCuenta.get("apellidoPaterno").value && this.formRegistroCuenta.get("apellidoMaterno").value) {
          console.log(this.formRegistroCuenta);
          this.isNombre = true;
          this.isDni = true;
          this.isCorreo = false;
          this.isUbigeo = false;
          this.isPpe = false;
          console.log(this.isNombre);
          console.log(this.isDni);
          console.log(this.isCorreo);
          console.log(this.isUbigeo);
          console.log(this.isPpe);
          return;
      }
  }

  //dni
  setVagons(event) {
    if (this.seatInformation.class && event.value) {
        this.vagons = [];
        this.seats = [];
        for (let i = 1; i < 3 * event.value.factor; i++) {
            this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
        }
    }
  }

  setSeats(event) {
    if (this.seatInformation.wagon && event.value) {
        this.seats = [];
        for (let i = 1; i < 10 * event.value.factor; i++) {
            this.seats.push({seat: i, type: event.value.type});
        }
    }
  }

  nextPageCorreo() {
    if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
        console.log(this.seatInformation);
        this.isNombre = true;
        this.isDni = true;
        this.isCorreo = true;
        this.isUbigeo = false;
        this.isPpe = false;
    }
  }

  prevPageNombre() {
      // this.router.navigate(['steps/personal']);{this.personal = false;
      this.isNombre = true;
      this.isDni = false;
      this.isCorreo = false;
      this.isUbigeo = false;
      this.isPpe = false;
  }

  onUpload(event) {
    let resultado = event.originalEvent.body;
    this.image = "data:" + event.files[0].type + ";base64," + atob(resultado.imagenReducida);
    this.imagenCodificada = btoa(this.image);
  }

  onError(event) {
    let response = JSON.parse(event.xhr.response);
  }


  //correo
  nextPageUbigeo() {
    if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
        console.log(this.seatInformation);
        console.log(this.personalInformation);
        this.isNombre = true;
        this.isDni = true;
        this.isCorreo = true;
        this.isUbigeo = true;
        this.isPpe = false;
    }
  }

  prevPageDni() {
      // this.router.navigate(['steps/personal']);{this.personal = false;
      this.isNombre = true;
      this.isDni = true;
      this.isCorreo = false;
      this.isUbigeo = false;
      this.isPpe = false;
  }

  //ubigeo
  nextPagePpe() {
    if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
        console.log(this.seatInformation);
        console.log(this.personalInformation);
        this.isNombre = true;
        this.isDni = true;
        this.isCorreo = true;
        this.isUbigeo = true;
        this.isPpe = true;
    }
  }

  prevPageCorreo() {
      // this.router.navigate(['steps/personal']);{this.personal = false;
      this.isNombre = true;
      this.isDni = true;
      this.isCorreo = true;
      this.isUbigeo = false;
      this.isPpe = false;
  }

  // onChangeDepartamento(event):void{
  //   let id = (event.target).value;
  //   this.cargarProvincias(id).then(() => {
  //     this.listDistrito = [];
  //     this.listDistrito.push({ label: 'Ninguno', value: 0 });
  //   })
  // }

  // cargarProvincias(departamentoId: number): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.http.listar("/ubigeo/" + departamentoId + "/provincias").subscribe(
  //       (data: IResultado) => {
  //         let list = Array<Provincia>();
  //         let obj;
  //         this.listProvincia = [];
  //         if (data) {
  //           for (const d of data.resultado) {
  //             obj = new Provincia();
  //             obj.copiar(d);
  //             list.push(obj);
  //           }
  //           list.forEach(objeto => {
  //             this.listProvincia.push({ label: objeto.provincia, value: objeto.provinciaId });
  //           })
  //           this.listProvincia = this.listProvincia.slice();
  //           resolve(true);
  //         }
  //       },
  //       error => { resolve(false); }
  //     );
  //   });
  // }


  // onChangeProvincia(event): void {
  //   let id = (event.target).value;
  //   this.cargarDistritos(id);
  // }

  // cargarDistritos(provinciaId: number): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     this.http.listar("/ubigeo/" + provinciaId + "/distritos").subscribe(
  //       (data: IResultado) => {
  //         let list = Array<Distrito>();
  //         let obj;
  //         this.listDistrito = [];
  //         if (data) {
  //           for (const d of data.resultado) {
  //             obj = new Distrito();
  //             obj.copiar(d);
  //             list.push(obj);
  //           }
  //           list.forEach(objeto => {
  //             this.listDistrito.push({ label: objeto.distrito, value: objeto.distritoId });
  //           })
  //           this.listDistrito = this.listDistrito.slice();
  //           resolve(true);
  //         }
  //       },
  //       error => { resolve(false); }
  //     );
  //   });
  // }




  //ppe
  nextPageEsperaValidacion() {
    if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
        console.log(this.seatInformation);
        console.log(this.personalInformation);
        this.isNombre = true;
        this.isDni = true;
        this.isCorreo = true;
        this.isUbigeo = true;
        this.isPpe = true;
    }
  }

  prevPageUbigeo() {
      // this.router.navigate(['steps/personal']);{this.personal = false;
      this.isNombre = true;
      this.isDni = true;
      this.isCorreo = false;
      this.isUbigeo = true;
      this.isPpe = false;
  }

}
