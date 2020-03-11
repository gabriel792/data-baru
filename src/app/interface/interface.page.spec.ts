import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterfacePage } from './interface.page';

describe('InterfacePage', () => {
  let component: InterfacePage;
  let fixture: ComponentFixture<InterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
