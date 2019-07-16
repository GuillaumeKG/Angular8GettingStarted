export class Bfoa {
    id: number
    name: string
    decription: string
    irt: string
    trigram: string
    internalUrlApi: string
    externalUrlApi: string
    tegs: string[]
    contacts: Contact[]
}

export class Contact{
    id: string
    firstname: string
    lastname: string
    email: string
    phoneNumber: string
}

