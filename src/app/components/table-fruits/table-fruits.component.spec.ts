import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFruitsComponent } from './table-fruits.component';

describe('TableFruitsComponent', () => {
  let component: TableFruitsComponent;
  let fixture: ComponentFixture<TableFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFruitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
