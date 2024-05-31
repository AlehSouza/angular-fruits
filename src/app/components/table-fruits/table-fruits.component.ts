import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuantityPipe } from "../../pipes/quantity.pipe";
import { CommonModule } from '@angular/common';
import { WeightPipe } from "../../pipes/weight.pipe";
import { FruitsService } from '../../services/fruits/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';

@Component({
    selector: 'app-table-fruits',
    standalone: true,
    templateUrl: './table-fruits.component.html',
    styleUrl: './table-fruits.component.scss',
    imports: [QuantityPipe, CommonModule, WeightPipe]
})
export class TableFruitsComponent implements OnInit{

    @Output() toggleModal = new EventEmitter()

    constructor(
        private fruitService: FruitsService,
    ) {}

    @Input() fruits!: any []

    handleSelectedFruit(fruit: Fruit) {
        this.toggleModal.emit(fruit)
    }
    
    ngOnInit(): void {
    }
}