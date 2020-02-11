import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajePage } from './mensaje.page';

describe('MensajePage', () => {
  let component: MensajePage;
  let fixture: ComponentFixture<MensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
