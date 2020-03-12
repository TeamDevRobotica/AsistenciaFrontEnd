import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalidaPage } from './salida.page';

describe('SalidaPage', () => {
  let component: SalidaPage;
  let fixture: ComponentFixture<SalidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
