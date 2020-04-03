import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.page.html',
  styleUrls: ['./salida.page.scss'],
})
export class SalidaPage implements OnInit {
  fecha: Date;
  usuario: any;
  monthShortNames = ['Ene', 'feb', 'mar', 'Abr', 'May' , 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];
  constructor() { 
    this.usuario = JSON.parse(localStorage.getItem('usuarios'));
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.fecha = new Date();
  };
}
