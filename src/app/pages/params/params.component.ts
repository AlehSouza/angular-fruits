import { Component, OnInit } from '@angular/core';
import { FruitComponent } from '../../components/fruit/fruit.component';
import { Fruit } from '../../schemas/fruit.schema';
import { FruitsService } from '../../services/fruits/fruits.service';

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [FruitComponent],
  templateUrl: './params.component.html',
  styleUrl: './params.component.scss'
})
export class ParamsComponent implements OnInit{

  constructor(private fruitService: FruitsService){}

  fruits!: Fruit[]

  ngOnInit(): void {
    this.fruits = this.fruitService.getFruits()
  }

}
