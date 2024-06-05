import { FormArray, FormControl, FormGroup } from "@angular/forms"

export type Seller = {
    id: number,
    name : string,
    age: number,
    address: Address,
    phones: Array<Phone>
}

export type Address = {
    cep: string,
    street: string,
    number: string,
    neighborhood: string,
    uf: string
}

export type Phone =  {
    number: string,
    owner: string,
}

export type SellerForm = FormGroup<{
    id: FormControl<number>;
    name: FormControl<string>;
    age: FormControl<number>;
    address: AddressForm;
    phones: FormArray<PhoneForm>;
}>;

export type AddressForm = FormGroup<{
    cep: FormControl<string>;
    street: FormControl<string>;
    number: FormControl<string>;
    neighborhood: FormControl<string>;
    uf: FormControl<string>;
}>;

export type PhoneForm = FormGroup<{
    owner: FormControl<string>;
    number: FormControl<string>;
}>;
