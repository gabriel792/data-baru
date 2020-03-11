import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderprocessPage } from './orderprocess.page';

describe('OrderprocessPage', () => {
  let component: OrderprocessPage;
  let fixture: ComponentFixture<OrderprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderprocessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
