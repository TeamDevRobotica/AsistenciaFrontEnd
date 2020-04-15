// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   // url='http://192.168.21.154:50000/usuarios';
//   url='http://c25bf4e9.ngrok.io/usuarios';
//   constructor(public http: HttpClient) { 
//     //  console.log('Hola Mundo');
//   }
//   // obtenerDatos(){
//   //   return this.http.get(this.url);
//   //   console.log()
//   // }
//   obtenerDatos(): Observable<any[]> {
//     return this.http.get<any[]>(this.url);
//     console.log(this.url);
//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url='http://192.168.21.154:50000/usuarios';
  // url= 'http://www.nbmayorista.com/api';
  url: 'appambient.escueladerobotica.misiones.gob.ar/api';

  
  constructor(public http: HttpClient) { 
    //  console.log('Hola Mundo');
  }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  // obtenerDatos(){
  //   return this.http.get(this.url);
  //   console.log()
  // }
  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
    console.log(this.url);
  }

  login(usuario: string, clave: string): Observable<any> {
    const url = 'appambient.escueladerobotica.misiones.gob.ar/api';
    return this.http
      .post <UserInterface> (
        url,
        { usuario, clave },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  
}