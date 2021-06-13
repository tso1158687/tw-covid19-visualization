import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconOpts: AnimationOptions = {
    path: '/assets/21636-corona-attacking-in-home.json',
    autoplay: true,
    loop: true,
    initialSegment: [10, 88]
  };

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
