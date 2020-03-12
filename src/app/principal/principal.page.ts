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
  usuarios: any[];


  

  constructor(public geolocation:Geolocation, public navCtrl: NavController, 
              public authService: AuthService) { 
                console.log('Ingreso');
     this.authService.obtenerDatos()
     .subscribe(
       (data)=>{this.usuarios=data; console.log(data);
       },
       (error)=>{console.log(error);}
     )
              }
              ionViewDidLoad(){
     
              };

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
