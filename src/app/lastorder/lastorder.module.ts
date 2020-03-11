import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastorderPageRoutingModule } from './lastorder-routing.module';

import { LastorderPage } from './lastorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastorderPageRoutingModule
  ],
  declarations: [LastorderPage]
})
export class LastorderPageModule {}
