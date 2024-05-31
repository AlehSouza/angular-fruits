import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

    isOpen: boolean = false

    constructor (
      private fruitsService: FruitsService
    ) {}

    selectedFruit!: Fruit;

    ngOnInit(): void {
      this.selectedFruit = this.fruitsService.selectedFruit
    }

    handleOpen() {
      this.isOpen = !this.isOpen
    }
}
