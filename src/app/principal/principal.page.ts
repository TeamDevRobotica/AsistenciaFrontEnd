import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public geolocation:Geolocation) { }
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
