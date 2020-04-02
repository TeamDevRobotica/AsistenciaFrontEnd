import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'principal',
  //   loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  // },
   {
     path: 'salida',
     loadChildren: () => import('./salida/salida.module').then( m => m.SalidaPageModule)
   },
   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //   {
  //   path: 'mensaje',
  //   loadChildren: () => import('./mensaje/mensaje.module').then( m => m.MensajePageModule)
  // },
  // {
  //   path: 'salida',
  //   loadChildren: () => import('./salida/salida.module').then( m => m.SalidaPageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
