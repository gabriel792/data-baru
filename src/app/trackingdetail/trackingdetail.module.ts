import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingdetailPageRoutingModule } from './trackingdetail-routing.module';

import { TrackingdetailPage } from './trackingdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackingdetailPageRoutingModule
  ],
  declarations: [TrackingdetailPage]
})
export class TrackingdetailPageModule {}
