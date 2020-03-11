import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurservicePage } from './ourservice.page';

describe('OurservicePage', () => {
  let component: OurservicePage;
  let fixture: ComponentFixture<OurservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
