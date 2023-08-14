import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSVPFormPageComponent } from './rsvp-form-page.component';

describe('RSVPFormPageComponent', () => {
  let component: RSVPFormPageComponent;
  let fixture: ComponentFixture<RSVPFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RSVPFormPageComponent]
    });
    fixture = TestBed.createComponent(RSVPFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
