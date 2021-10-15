import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { MtnComponent } from './data/mtn/mtn.component';
import { GloComponent } from './data/glo/glo.component';
import { EtisalatComponent } from './data/etisalat/etisalat.component';
import { AirtelComponent } from './data/airtel/airtel.component';
import { DataComponent } from './data/data/data.component';
import { AirtimeComponent } from './airtime/airtime/airtime.component';
import { CableComponent } from './cable/cable/cable.component';
import { ElectricityComponent } from './electricity/electricity/electricity.component';
import { WalletComponent } from './wallet/wallet/wallet.component';





@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    MtnComponent,
    GloComponent,
    EtisalatComponent,
    AirtelComponent,
    DataComponent,
    AirtimeComponent,
    CableComponent,
    ElectricityComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    Ng2OrderModule, 
    MatPaginatorModule,
    NgxPaginationModule

  ]
})
export class DashboardModule { }
