import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwanMapComponent } from './taiwan-map.component';

describe('TaiwanMapComponent', () => {
  let component: TaiwanMapComponent;
  let fixture: ComponentFixture<TaiwanMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiwanMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiwanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
