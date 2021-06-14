import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityComponent } from './mobility.component';

describe('MobilityComponent', () => {
  let component: MobilityComponent;
  let fixture: ComponentFixture<MobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
