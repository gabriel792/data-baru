import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastorderPage } from './lastorder.page';

const routes: Routes = [
  {
    path: '',
    component: LastorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastorderPageRoutingModule {}
