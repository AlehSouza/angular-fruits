import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})

export class ModalDeleteComponent implements OnInit {

  constructor(
    private fruitsService: FruitsService
  ) { }

  isOpen: boolean = false

  selectedFruit!: Fruit;

  ngOnInit(): void {
    this.selectedFruit = this.fruitsService.selectedFruit
  }

  handleOpen() {
    this.isOpen = !this.isOpen
  }

  handleDelete() {
    this.fruitsService.deleteFruit(this.selectedFruit)
    this.handleOpen()
  }

}
