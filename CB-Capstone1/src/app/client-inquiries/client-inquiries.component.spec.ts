import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInquiriesComponent } from './client-inquiries.component';

describe('ClientInquiriesComponent', () => {
  let component: ClientInquiriesComponent;
  let fixture: ComponentFixture<ClientInquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientInquiriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
