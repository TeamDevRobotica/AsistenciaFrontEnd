import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { 
          path: 'principal',  
          loadChildren: () =>
              import('../principal/principal.module').then(m => m.PrincipalPageModule) 
        },
        { 

          path: 'salida', 
          loadChildren:() =>
            import('../salida/salida.module').then(m => m.SalidaPageModule) 

        },
        // { 
        //   path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' 
        // },
        // { path: 'creardesafio', loadChildren: '../creardesafio/creardesafio.module#CreardesafioPageModule' },

        
    ]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'principal',
    redirectTo:'/tabs/principal',
    pathMatch:'full'


  },
  {
    path:'salida',
    redirectTo:'/tabs/salida',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}