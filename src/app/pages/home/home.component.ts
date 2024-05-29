import { Component, OnInit } from '@angular/core';
import { FruitComponent } from '../../components/fruit/fruit.component';
import { CommonModule } from '@angular/common';
import { QuantityPipe } from "../../pipes/quantity.pipe";
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from '../../schemas/fruit.schema';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FruitComponent, QuantityPipe,CommonModule, TableFruitsComponent, NavigationComponent]
})
export class HomeComponent implements OnInit {

    constructor(
        private fruitsService: FruitsService
    ) {}

    currentDate: Date = new Date()

    fruits!: Fruit[];

    ngOnInit(): void {
        this.fruits = this.fruitsService.getFruits()
    }
}
