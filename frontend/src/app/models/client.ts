import { Address } from './address';

export class Client {
    id: string;
    name: string;
    address: Address;
    auto: string[];
    rfc: string;
    phone: string;
    email: string;
    status = true;
}
