import { Injectable } from "@angular/core";
import { PhoneForm, Seller, SellerForm } from "../../schemas/seller.schema";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class SellerService {

  constructor() { }

  sellers: Seller[] = [
    {
      id: 0,
      name: "Vendedor Top",
      age: 22,
      address: {
        cep: "08150020",
        street: "Rua Jose Pessota",
        number: "100",
        neighborhood: "Pq Santa Rita",
        uf: "SP"
      },
      phones: [
        {
          owner: "Ale",
          number: "11 983674446"
        },
        {
          owner: "Ale2",
          number: "11 983674446"
        },
        {
          owner: "Ale3",
          number: "11 983674446"
        },
        {
          owner: "Ale4",
          number: "11 983674446"
        },
        {
          owner: "Ale",
          number: "11 983674446"
        }
      ]
    },
    {
      id: 1,
      name: "Cliente Fiel",
      age: 35,
      address: {
        cep: "04571010",
        street: "Avenida Engenheiro Luís Carlos Berrini",
        number: "100",
        neighborhood: "Itaim Bibi",
        uf: "SP"
      },
      phones: [
        {
          owner: "Ale",
          number: "11 983674446"
        },
        {
          owner: "Ale2",
          number: "11 983674446"
        },
        {
          owner: "Ale3",
          number: "11 983674446"
        },
        {
          owner: "Ale4",
          number: "11 983674446"
        },
        {
          owner: "Ale",
          number: "11 983674446"
        },
        {
          owner: "Ale2",
          number: "11 983674446"
        },
        {
          owner: "Ale3",
          number: "11 983674446"
        },
        {
          owner: "Ale4",
          number: "11 983674446"
        },
      ]
    },
    {
      id: 2,
      name: "Empreendedor Visionário",
      age: 45,
      address: {
        cep: "01452000",
        street: "Rua Oscar Freire",
        number: "100",
        neighborhood: "Jardins",
        uf: "SP"
      },
      phones: [
        {
          owner: "Carlos",
          number: "11 991234567"
        }
      ]
    },
    {
      id: 3,
      name: "Investidor Estratégico",
      age: 50,
      address: {
        cep: "01311000",
        street: "Avenida Paulista",
        number: "100",
        neighborhood: "Bela Vista",
        uf: "SP"
      },
      phones: [
        {
          owner: "Sophia",
          number: "11 981122334"
        }
      ]
    },
    {
      id: 4,
      name: "Colega Confiável",
      age: 28,
      address: {
        cep: "05425020",
        street: "Rua dos Pinheiros",
        number: "100",
        neighborhood: "Pinheiros",
        uf: "SP"
      },
      phones: [
        {
          owner: "Lucas",
          number: "11 999887766"
        }
      ]
    }
  ]

  getSellers() {
    return this.sellers
  }

  getSellersById(id: number) {
    let seller = this.sellers.find((seller) => seller.id === id)
    return seller as Seller
  }

  generateForm(): SellerForm {
    return new FormGroup<any>({
      id: new FormControl<number>({value: 0, disabled: true}),
      name: new FormControl<string>('', Validators.required),
      age: new FormControl<string>('', Validators.required),
      address: this.generateAddress(),
      phones: this.generatePhonesForm()
    })
  }

  generateAddress(){
    return new FormGroup<any>({
      cep: new FormControl<string>(''),
      street: new FormControl<string>(''),
      number: new FormControl<string>(''),
      neighborhood: new FormControl<string>(''),
      uf: new FormControl<string>(''),
    })
  }

  generatePhonesForm() {
    return new FormArray<PhoneForm>([])
  }

  generatePhoneForm(): PhoneForm{
    return new FormGroup<any>({
      owner: new FormControl<string>(''),
      number: new FormControl<string>(''),
    })
  }
}
