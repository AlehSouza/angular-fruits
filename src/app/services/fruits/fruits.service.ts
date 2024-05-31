import { Injectable } from '@angular/core';
import { Fruit } from '../../schemas/fruit.schema';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  fruits: Fruit[]  = [
    {
      name: "Watermelon",
      quantity: 20,
      weight: 1000,
      value: 5.00
    },
    {
      name: "Melon",
      quantity: 0,
      weight: 600,
      value: 5.00
    },
    {
      name: "Apple",
      quantity: 15,
      weight: 200,
      value: 5.00
    },
    {
      name: "Strawberry",
      quantity: 30,
      weight: 100,
      value: 5.00
    },
    {
      name: "Grape",
      quantity: 40,
      weight: 100,
      value: 5.00
    }
  ]

  selectedFruit!: Fruit;

  selectFruit (fruit: Fruit) {
    console.log(fruit)
    this.selectedFruit = fruit
  }

  getFruits() {
    return this.fruits
  }

  createFruit(fruit: Fruit) {
    console.log('create Fruit')
  }

  deleteFruit(fruit: Fruit) {
    console.log('delete Fruit')
  }

  updateFruit(fruit: Fruit) {
    console.log('update fruit')
  }


}
