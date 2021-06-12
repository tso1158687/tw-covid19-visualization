import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  imports: [LottieModule.forRoot({ player: playerFactory })],
  exports: [LottieModule]
})
export class LottieIconModule { }