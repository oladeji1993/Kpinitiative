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




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,

  ]
})
export class DashboardModule { }
