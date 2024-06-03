import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../schemas/fruit.schema';
import { FruitsService } from '../../services/fruits/fruits.service';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.scss'
})

export class ModalCreateComponent implements OnInit{

  constructor(
    private fruitsService: FruitsService
  ) { }

  fruitForm = this.fruitsService.generateForm();
  
  isOpen: boolean = false;

  newFruit!: Fruit;

  ngOnInit(): void {}

  handleOpen() {
    this.isOpen = !this.isOpen
  }

  handleCreate() {
    const draft = {
      ...this.fruitForm.getRawValue(),
      id: this.fruitsService.fruits.length,
    }
    this.handleOpen()
    this.fruitsService.createFruit(draft as Fruit)
  }
}
