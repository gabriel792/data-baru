import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackingdetailPage } from './trackingdetail.page';

describe('TrackingdetailPage', () => {
  let component: TrackingdetailPage;
  let fixture: ComponentFixture<TrackingdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
