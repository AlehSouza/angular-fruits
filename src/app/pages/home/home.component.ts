import { Component } from '@angular/core';
import { FruitComponent } from '../../components/fruit/fruit.component';
import { CommonModule } from '@angular/common';
import { QuantityPipe } from "../../pipes/quantity.pipe";
import { TableFruitsComponent } from '../../components/table-fruits/table-fruits.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FruitComponent, QuantityPipe,CommonModule, TableFruitsComponent, NavigationComponent, ReactiveFormsModule]
})
export class HomeComponent {
    currentDate: Date = new Date()
    
    // exampleFormArray = new FormGroup({
    //     aliases: new FormArray<FormControl<string>>([], [Validators.required]),
    //     chips: new FormControl<string[]>(['12398123', 'askjdasd;kj']),
    // });

    // ngOnInit(): void {
    //     ['12398123', 'askjdasd;kj'].forEach((element: string) => {
    //         this.exampleFormArray.controls.aliases.push(new FormControl(element) as any)
    //     });
    // }

    // addAlias() {
    //     const fc: any = new FormControl<string>('', []);
    //     this.exampleFormArray.controls.aliases.push(fc)
    // }
}
