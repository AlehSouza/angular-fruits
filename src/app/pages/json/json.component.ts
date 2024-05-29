import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json.component.html',
  styleUrl: './json.component.scss'
})
export class JsonComponent implements OnInit {

  constructor(
    private fruitService: FruitsService
  ) {}

  jsonFruits!: Fruit[];

  ngOnInit(): void {
    this.jsonFruits = this.fruitService.getFruits()
  }

}
