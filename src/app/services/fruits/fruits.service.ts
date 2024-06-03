import { Injectable } from '@angular/core';
import { Fruit, FruitForm } from '../../schemas/fruit.schema';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.fruits.push(fruit)
  }

  deleteFruit(fruit: Fruit) {
    let index = this.fruits.findIndex(fruitArr => fruitArr.id === fruit.id)
    this.fruits.splice(index, 1)
  }

  updateFruit(fruit: Fruit) {
    let index = this.fruits.findIndex(fruitArr => fruitArr.id === fruit.id)
    this.fruits[index] = fruit
  }

  generateForm(): FruitForm {
    return new FormGroup<any>({
      id: new FormControl<number>({value: 0, disabled: true}),
      name: new FormControl<string>('', Validators.required),
      quantity: new FormControl<number>(0, Validators.required),
      weight: new FormControl<number>(0, Validators.required),
      value: new FormControl<number>(0, Validators.required),
      status: new FormControl<boolean>(true, Validators.required),
    })
  }

}
