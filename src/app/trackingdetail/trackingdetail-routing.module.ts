import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingdetailPage } from './trackingdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingdetailPageRoutingModule {}
