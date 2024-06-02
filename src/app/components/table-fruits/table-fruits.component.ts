import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuantityPipe } from "../../pipes/quantity.pipe";
import { CommonModule } from '@angular/common';
import { WeightPipe } from "../../pipes/weight.pipe";
import { Fruit } from '../../schemas/fruit.schema';
import { StatusPipe } from "../../pipes/status.pipe";

@Component({
    selector: 'app-table-fruits',
    standalone: true,
    templateUrl: './table-fruits.component.html',
    styleUrl: './table-fruits.component.scss',
    imports: [QuantityPipe, CommonModule, WeightPipe, StatusPipe]
})

export class TableFruitsComponent implements OnInit {
    @Input() fruits!: any[]

    @Output() toggleModalUpdateEmitter = new EventEmitter<Fruit>()
    @Output() toggleModalDeleteEmitter = new EventEmitter<Fruit>()

    handleSelectedFruit(fruit: Fruit) {
        this.toggleModalUpdateEmitter.emit(fruit)
    }

    handleDeleteFruit (event: Fruit) {
        this.toggleModalDeleteEmitter.emit(event)
    }

    ngOnInit(): void {
    }
}