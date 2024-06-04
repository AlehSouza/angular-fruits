export type Seller = {
    id: number,
    name : string,
    age: number,
    address: Address,
    phone: Array<Phone>
}

export type Address = {
    cep: string,
    street: string,
    number: string,
    bairro: string,
    uf: string
}

export type Phone =  {
    number: string,
    owner: string,
}