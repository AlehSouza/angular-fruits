import { Component, Input, OnInit } from '@angular/core';
import { QuantityPipe } from "../../pipes/quantity.pipe";
import { CommonModule } from '@angular/common';
import { WeightPipe } from "../../pipes/weight.pipe";

@Component({
    selector: 'app-table-fruits',
    standalone: true,
    templateUrl: './table-fruits.component.html',
    styleUrl: './table-fruits.component.scss',
    imports: [QuantityPipe, CommonModule, WeightPipe]
})
export class TableFruitsComponent implements OnInit{
   @Input() fruits!: any []

   ngOnInit(): void {
    console.log(this.fruits)
    }
}
