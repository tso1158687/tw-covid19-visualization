import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilityComponent } from './components/mobility/mobility.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [MobilityComponent],
  imports: [CommonModule, ChartsModule],
  exports: [MobilityComponent],
})
export class ChartModule {}
