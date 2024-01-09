import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'coin-list', pathMatch:"full"},
  {path: 'coin-list', component: CoinListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
