import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEntriesComponent } from './past-entries.component';

describe('PastEntriesComponent', () => {
  let component: PastEntriesComponent;
  let fixture: ComponentFixture<PastEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
