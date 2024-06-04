import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSellersComponent } from './table-sellers.component';

describe('TableSellersComponent', () => {
  let component: TableSellersComponent;
  let fixture: ComponentFixture<TableSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
