import { Address } from './address';

export interface Client {
    id: string;
    name: string;
    address: Address;
    auto: string[];
    rfc: string;
    phone: string;
    email: string;
    status: boolean;
}
