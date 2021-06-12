import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taiwan-map',
  templateUrl: './taiwan-map.component.html',
  styleUrls: ['./taiwan-map.component.scss']
})
export class TaiwanMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName('path')
  }

}
