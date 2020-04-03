// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Subscriber } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { UserInterface } from '../models/user-interface';
import { environment } from './../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../servicios/user.service';
// import { User } from '../user/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  apiURL: string = environment.apiURL;

  
  
 constructor(public authService: AuthService, public router: Router, public http: HttpClient, public formBuilder: FormBuilder) { 
  
            }
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });
  }
  get f() { 
    return this.loginForm.controls; 
  }
  OnSubmitLogin(){
    this.http.get(this.apiURL + '/controlador.php?action=getLogin&usuario=' + this.f.usuario.value + '&pass=' + this.f.clave.value)
    .subscribe((res: any) => {
          if (res.status === 'exito') {
            localStorage.setItem('usuarios', JSON.stringify(res));
          // localStorage.setItem('usuarios', this.f.usuario.value);
          this.router.navigate(['/principal']);
        }else{
          console.error('ERROR')
          alert('Error');
        }
         error=>{
         console.error('ERROR')
         alert('Error');
        }       
      
    });
}
}
