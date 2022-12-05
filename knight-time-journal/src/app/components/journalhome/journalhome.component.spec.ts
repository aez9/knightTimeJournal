import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalhomeComponent } from './journalhome.component';

describe('JournalhomeComponent', () => {
  let component: JournalhomeComponent;
  let fixture: ComponentFixture<JournalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
