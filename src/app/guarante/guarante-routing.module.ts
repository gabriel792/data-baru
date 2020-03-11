import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuarantePage } from './guarante.page';

const routes: Routes = [
  {
    path: '',
    component: GuarantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuarantePageRoutingModule {}
