import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-update.component.html',
  styleUrl: './modal-update.component.scss'
})

export class ModalUpdateComponent implements OnInit {

  constructor(
    private fruitsService: FruitsService
  ) { }

  fruitForm = this.fruitsService.generateForm();
  isOpen: boolean = false

  ngOnInit(): void {}

  handleOpen() {
    this.isOpen = !this.isOpen
  }

  handleUpdate() {
    this.fruitsService.updateFruit(this.fruitForm.getRawValue() as Fruit)
    this.handleOpen()
  }
}
