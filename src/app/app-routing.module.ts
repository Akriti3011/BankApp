import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BankComponent,
  BankListComponent,
  BankDetailsComponent
} from './bank/index';

const routes: Routes = [
  {
    path: 'bank', component: BankComponent,
    children: [
      {
        path: 'list', component: BankListComponent
      },
      {
        path: 'detail/:id', component: BankDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  BankComponent,
  BankListComponent,
  BankDetailsComponent
];
