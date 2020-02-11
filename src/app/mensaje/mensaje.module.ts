import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajePageRoutingModule } from './mensaje-routing.module';

import { MensajePage } from './mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajePageRoutingModule
  ],
  declarations: [MensajePage]
})
export class MensajePageModule {}
