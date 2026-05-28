import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ThresholdsComponent } from './thresholds.component';
import { ThresholdsService } from '../../../core/services/thresholds.service';

describe('ThresholdsComponent', () => {
  let component: ThresholdsComponent;
  let fixture: ComponentFixture<ThresholdsComponent>;

  const mockThresholdsService = {
    getMetar: () => of({
      minVisibility: 0.8,
      minCloudHeight: 200,
      maxCloudQuantity: 'BKN',
      minAltimeter: 950,
      maxTemperature: 4,
      maxWindSpeed: 40,
      maxGustSpeed: 45,
      maxWeatherIntensity: 'HEAVY',
      windShear: true,
      cancellingPhenomenon: [],
      operationallySignificantPhenomena: []
    }),
    updateMetar: (val: any) => of(val),
    getTaf: () => of({
      minVisibility: 0.8,
      minCloudHeight: 200,
      maxCloudQuantity: 'BKN',
      cancellingCloudType: 'CB',
      maxWindSpeed: 40,
      maxGustSpeed: 45,
      minTempoProbability: 40,
      cancellingPhenomenon: [],
      operationallySignificantPhenomena: []
    }),
    updateTaf: (val: any) => of(val),
    getSigmet: () => of({
      minFlightLevel: 30,
      maxFlightLevel: 450,
      maxIntensity: 'INTSF',
      wmoOperationallySignificant: [],
      wmoCancelling: [],
      phenomenaOperationallySignificant: [],
      phenomenaCancelling: []
    }),
    updateSigmet: (val: any) => of(val)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThresholdsComponent],
      providers: [
        { provide: ThresholdsService, useValue: mockThresholdsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThresholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
