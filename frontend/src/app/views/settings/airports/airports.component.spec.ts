import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {AirportService} from '../../../core/services/airport.service';

describe('AirportsComponent', () => {
  let component: AirportsComponent;
  let fixture: ComponentFixture<AirportsComponent>;

  const mockAirportService = {
    getAll: () => of([]),
    create: (airport: any) => of(airport),
    update: (id: number, airport: any) => of(airport),
    delete: (id: number) => of(null)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportsComponent],
      providers: [
        {provide: AirportService, useValue: mockAirportService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
