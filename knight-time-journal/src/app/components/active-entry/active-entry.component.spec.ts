import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEntryComponent } from './active-entry.component';

describe('ActiveEntryComponent', () => {
  let component: ActiveEntryComponent;
  let fixture: ComponentFixture<ActiveEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
