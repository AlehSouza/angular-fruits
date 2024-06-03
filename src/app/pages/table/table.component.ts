import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';
import { ModalUpdateComponent } from '../../components/modal-update/modal-update.component';
import { ModalDeleteComponent } from '../../components/modal-delete/modal-delete.component';
import { ModalCreateComponent } from '../../components/modal-create/modal-create.component';
import { Fruit } from '../../schemas/fruit.schema';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [TableFruitsComponent, ModalUpdateComponent, ModalDeleteComponent, ModalCreateComponent]
})

export class TableComponent implements OnInit {

  @ViewChild(ModalUpdateComponent) modalUpdate!: ModalUpdateComponent
  @ViewChild(ModalDeleteComponent) modalDelete!: ModalDeleteComponent
  @ViewChild(ModalCreateComponent) modalCreate!: ModalCreateComponent

  constructor(
    public fruitsService: FruitsService
  ) { }

  ngOnInit(): void {
  }

  toggleModalUpdate(fruit: Fruit) {
    this.modalUpdate.selectedFruit = fruit
    this.modalUpdate.isOpen = !this.modalUpdate.isOpen
  }

  toggleModalDelete(fruit: Fruit) {
    this.modalDelete.selectedFruit = fruit
    this.modalDelete.isOpen = !this.modalDelete.isOpen
  }

  toggleModalCreate(event: any) {
    this.modalCreate.handleOpen()
  }

}
