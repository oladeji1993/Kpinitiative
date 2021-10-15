import { WalletComponent } from './wallet/wallet/wallet.component';
import { ElectricityComponent } from './electricity/electricity/electricity.component';
import { AirtimeComponent } from './airtime/airtime/airtime.component';
import { CableComponent } from './cable/cable/cable.component';
import { HomeComponent } from 'src/app/dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DataComponent } from './data/data/data.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent,
  children: [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'data',
      component: DataComponent
    },

    {
      path: 'cable',
      component: CableComponent
    },
    {
      path: 'airtime',
      component: AirtimeComponent
    },

    {
      path: 'electricity',
      component: ElectricityComponent
    },

    {
      path: 'wallet',
      component: WalletComponent
    },



  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
