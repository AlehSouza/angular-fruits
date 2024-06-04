import { Injectable } from "@angular/core";
import { Seller } from "../../schemas/seller.schema";

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
        bairro: "Pq Santa Rita",
        uf: "SP"
      },
      phone: [
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
        bairro: "Itaim Bibi",
        uf: "SP"
      },
      phone: [
        {
          owner: "Marcela",
          number: "11 987654321"
        }
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
        bairro: "Jardins",
        uf: "SP"
      },
      phone: [
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
        bairro: "Bela Vista",
        uf: "SP"
      },
      phone: [
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
        bairro: "Pinheiros",
        uf: "SP"
      },
      phone: [
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
}
