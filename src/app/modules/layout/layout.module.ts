import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { CommonComponent } from './components/common/common.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialUiModule,
    HighchartsChartModule,
  ],
})
export class LayoutModule { }
