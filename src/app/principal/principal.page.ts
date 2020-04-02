import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { AuthService } from '../servicios/auth.service';


import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuarios:any[];
  nombre: string;
  usuario: string;


  

  constructor(public geolocation:Geolocation, public navCtrl: NavController, public authService: AuthService) { 
        this.usuario = localStorage.getItem('usuarios');
        console.log('Ingreso');
              }
ionViewDidLoad(){};

ngAfterViewInit(){
  this.GeolocationNative();
}
  GeolocationNative(){
      this.geolocation.getCurrentPosition().then((geposition:Geoposition)=>{
        console.log(geposition);
      })
  }

  ngOnInit() {
  }
  

}
