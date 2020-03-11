import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lastorder',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'interface',
    loadChildren: () => import('./interface/interface.module').then(m => m.InterfacePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'berhasil',
    loadChildren: () => import('./berhasil/berhasil.module').then(m => m.BerhasilPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then(m => m.CommentPageModule)
  },
  {
    path: 'guarante',
    loadChildren: () => import('./guarante/guarante.module').then(m => m.GuarantePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./lastorder/lastorder.module').then(m => m.LastorderPageModule)
  },
  {
    path: 'orderdetail',
    loadChildren: () => import('./orderdetail/orderdetail.module').then(m => m.OrderdetailPageModule)
  },
  {
    path: 'orderprocess',
    loadChildren: () => import('./orderprocess/orderprocess.module').then(m => m.OrderprocessPageModule)
  },
  {
    path: 'ourservice',
    loadChildren: () => import('./ourservice/ourservice.module').then(m => m.OurservicePageModule)
  },
  {
    path: 'trackingdetail',
    loadChildren: () => import('./trackingdetail/trackingdetail.module').then(m => m.TrackingdetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
