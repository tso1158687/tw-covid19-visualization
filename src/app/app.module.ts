import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TaiwanMapComponent } from './components/taiwan-map/taiwan-map.component';
import { LottieIconModule } from './modules/lottie-icon/lottie-icon.module';
import { ChartModule } from './modules/chart/chart.module';
@NgModule({
  declarations: [
    AppComponent,
    TaiwanMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieIconModule,
    NgxChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
