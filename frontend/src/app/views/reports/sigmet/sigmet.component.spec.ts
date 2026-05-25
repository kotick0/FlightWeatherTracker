import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {SigmetService} from '../../../core/services/sigmet.service';

describe('SigmetComponent', () => {
  let component: SigmetComponent;
  let fixture: ComponentFixture<SigmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigmetComponent],
      providers: [
        {provide: SigmetService, useValue: {getAll: () => of([])}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
