import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableFruitsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit{

  constructor( 
    public fruitsService: FruitsService
  ) {}

  ngOnInit(): void {
  }
}
