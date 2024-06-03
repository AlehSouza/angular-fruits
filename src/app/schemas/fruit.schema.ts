import { FormControl, FormGroup } from "@angular/forms"

export type Fruit = {
    id: number
    name: string
    quantity: number
    weight: number
    value: number
    status: boolean
}

export type FruitForm = FormGroup<{
    id: FormControl<number>;
    name: FormControl<string>;
    quantity: FormControl<number>;
    weight: FormControl<number>;
    value: FormControl<number>;
    status: FormControl<boolean>;
}>;
