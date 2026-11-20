import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEnquiry } from './contact-enquiry';

describe('ContactEnquiry', () => {
  let component: ContactEnquiry;
  let fixture: ComponentFixture<ContactEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEnquiry],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactEnquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
