import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {AirportService} from '../../../core/services/airport.service';
import {LongTafService} from '../../../core/services/long-taf.service';
import {ShortTafService} from '../../../core/services/short-taf.service';
import {ReportsFilterPreferencesService} from '../../../core/services/reports-filter-preferences.service';

describe('TafComponent', () => {
  let component: TafComponent;
  let fixture: ComponentFixture<TafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TafComponent],
      providers: [
        {provide: AirportService, useValue: {getAll: () => of([])}},
        {
          provide: ReportsFilterPreferencesService,
          useValue: {
            getTafType: () => 'Long TAF',
            setTafType: () => undefined,
            getTafLongHours: () => 1,
            setTafLongHours: () => undefined,
            getTafShortHours: () => 1,
            setTafShortHours: () => undefined,
            getStringArray: () => [],
            setStringArray: () => undefined,
          }
        },
        {provide: LongTafService, useValue: {getFiltered: () => of([])}},
        {provide: ShortTafService, useValue: {getFiltered: () => of([])}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
