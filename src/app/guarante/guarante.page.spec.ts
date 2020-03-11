import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuarantePage } from './guarante.page';

describe('GuarantePage', () => {
  let component: GuarantePage;
  let fixture: ComponentFixture<GuarantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuarantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
