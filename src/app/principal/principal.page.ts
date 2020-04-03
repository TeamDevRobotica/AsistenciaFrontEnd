import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { AuthService } from '../servicios/auth.service';


import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})
export class PrincipalPage implements OnInit {
  // usuarios:any[];
  // nombre: string;
  usuario: any;
  // tslint:disable-next-line: variable-name
  
  fecha: Date;
  customDayShortNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  constructor(public geolocation:Geolocation, public navCtrl: NavController, public authService: AuthService) { 
    this.usuario = JSON.parse(localStorage.getItem('usuarios'));
    console.log(this.usuario.nombre);
              }
ionViewDidLoad(){}

ngAfterViewInit(){
  this.GeolocationNative();
  
}
ionViewWillEnter(){
  
  this.fecha = new Date();
};
  GeolocationNative(){
      this.geolocation.getCurrentPosition().then((geposition:Geoposition)=>{
        console.log(geposition);
      });
  }

  ngOnInit() {
    this.fecha = new Date();
  }
  

}
