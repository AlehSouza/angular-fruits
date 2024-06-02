import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-update.component.html',
  styleUrl: './modal-update.component.scss'
})

export class ModalUpdateComponent implements OnInit {

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

  handleUpdate() {
    this.fruitsService.updateFruit(this.selectedFruit)
    this.handleOpen()
  }
}
