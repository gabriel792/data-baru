import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastorderPage } from './lastorder.page';

describe('LastorderPage', () => {
  let component: LastorderPage;
  let fixture: ComponentFixture<LastorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
