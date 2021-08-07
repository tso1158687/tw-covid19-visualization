import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IDailyData } from './interface/daily-data.interface';
import { VaccinationService } from './vaccination.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items$: Observable<any[]>;
  today: any;
  yesterday: any;
  iconOpts: AnimationOptions = {
    path: '/assets/21636-corona-attacking-in-home.json',
    autoplay: true,
    loop: true,
    initialSegment: [10, 88],
  };

  constructor(firestore: AngularFirestore,
    private vaccinationService:VaccinationService) {
    this.items$ = firestore
      .collection('today', (ref) => {
        return ref.orderBy('date', 'desc').limit(2);
      })
      .valueChanges();
  }

  ngOnInit(): void {
    // this.vaccinationService.getVaccinationStatusList().subscribe(e=>console.log(e))
    this.items$.subscribe((e) => {
      console.log(e);
      this.today = e[0];
      this.yesterday = e[1];
      console.log(this.today);
    });
  }

  getIcon(column: string): string {
    if (this.today[column] - this.yesterday[column] === 0) {
      return 'minus-outline';
    } else {
      return this.today[column] - this.yesterday[column] > 0
        ? 'arrow-circle-up-outline'
        : 'arrow-circle-down-outline';
    }
  }

  compareWithYesterday(column: string): string {
    const symbol = this.today[column] - this.yesterday[column] < 0 ? '-' : '+';
    const number = Math.abs(this.today[column] - this.yesterday[column]);
    return `${symbol}${number}`;
  }
}
