import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {AirportService} from '../../../core/services/airport.service';
import {MetarService} from '../../../core/services/metar.service';
import {ReportsFilterPreferencesService} from '../../../core/services/reports-filter-preferences.service';

describe('MetarComponent', () => {
  let component: MetarComponent;
  let fixture: ComponentFixture<MetarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetarComponent],
      providers: [
        {provide: AirportService, useValue: {getAll: () => of([])}},
        {
          provide: ReportsFilterPreferencesService,
          useValue: {
            getMetarHours: () => 1,
            setMetarHours: () => undefined,
            getStringArray: () => [],
            setStringArray: () => undefined,
          }
        },
        {provide: MetarService, useValue: {getFiltered: () => of([])}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
