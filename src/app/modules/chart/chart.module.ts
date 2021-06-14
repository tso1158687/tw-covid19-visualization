import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilityComponent } from './components/mobility/mobility.component';
import { ChartsModule } from 'ng2-charts';
import { NbRadioModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MobilityComponent],
  imports: [CommonModule, ChartsModule,NbRadioModule,FormsModule],
  exports: [MobilityComponent],
})
export class ChartModule {}
