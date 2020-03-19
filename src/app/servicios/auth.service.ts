import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url='http://192.168.21.154:50000/usuarios';
  url='http://c25bf4e9.ngrok.io/usuarios';
  constructor(public http: HttpClient) { 
    //  console.log('Hola Mundo');
  }
  // obtenerDatos(){
  //   return this.http.get(this.url);
  //   console.log()
  // }
  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
    console.log(this.url);
  }

}
