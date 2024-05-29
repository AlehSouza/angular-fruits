import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [TableFruitsComponent],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})

export class TabelaComponent implements OnInit{

  constructor( 
    public fruitsService: FruitsService
  ) {}

  ngOnInit(): void {
  }
}
