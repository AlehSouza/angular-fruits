import { Injectable } from '@angular/core';
import { Fruit } from '../../schemas/fruit.schema';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  fruits: Fruit[]  = [
    {
      id: 0,
      name: "Watermelon",
      quantity: 20,
      weight: 1000,
      value: 5.00,
      status: true,
    },
    {
      id: 1,
      name: "Melon",
      quantity: 0,
      weight: 600,
      value: 5.00,
      status: false,
    },
    {
      id: 2,
      name: "Apple",
      quantity: 15,
      weight: 200,
      value: 5.00,
      status: true,
    },
    {
      id: 3,
      name: "Strawberry",
      quantity: 30,
      weight: 100,
      value: 5.00,
      status: true,
    },
    {
      id: 4,
      name: "Grape",
      quantity: 40,
      weight: 100,
      value: 5.00,
      status: true,
    }
  ]

  selectedFruit!: Fruit;

  selectFruit (fruit: Fruit) {
    this.selectedFruit = fruit
  }

  getFruits() {
    return this.fruits
  }

  createFruit(fruit: Fruit) {
    console.log('create Fruit')
  }

  deleteFruit(fruit: Fruit) {
    let index = this.fruits.findIndex(fruitArr => fruitArr.id === fruit.id)
    this.fruits.splice(index, 1)
  }

  updateFruit(fruit: Fruit) {
    let index = this.fruits.findIndex(fruitArr => fruitArr.id === fruit.id)
    this.fruits[index] = fruit
  }


}
