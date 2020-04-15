import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  usuarios:any[];
  nombre: string;
  usuario: string;
  constructor(public navCtrl: NavController, public authService: AuthService) 
  {
    this.usuario = localStorage.getItem('usuarios');
    console.log('Ingreso');
//  this.authService.obtenerDatos()
//  .subscribe(
//  (data)=>{this.usuarios=data; console.log(data);
//  },
//  (error)=>{console.log(error);
// })
// this.usuario = loginPersonas.get();
}
      
       ngOnInit() {
        
      }

      
 }
