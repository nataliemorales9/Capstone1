import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTablesComponent } from './client-tables.component';

describe('ClientTablesComponent', () => {
  let component: ClientTablesComponent;
  let fixture: ComponentFixture<ClientTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
