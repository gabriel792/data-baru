import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuarantePageRoutingModule } from './guarante-routing.module';

import { GuarantePage } from './guarante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuarantePageRoutingModule
  ],
  declarations: [GuarantePage]
})
export class GuarantePageModule {}
