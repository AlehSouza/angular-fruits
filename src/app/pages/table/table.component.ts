import { Component, OnInit, ViewChild } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableFruitsComponent, ModalComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit{

  @ViewChild(ModalComponent) model!: ModalComponent

  constructor( 
    public fruitsService: FruitsService
  ) {}

  ngOnInit(): void {
  }

  toggleModal(event: any) {
    console.log(event)
    this.model.isOpen = !this.model.isOpen
    this.model.selectedFruit = event
  }

}
