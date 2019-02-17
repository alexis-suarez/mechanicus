import { Address } from './address';

export class Employee {
    id: string;
    name: string;
    address = new Address();
    nss: string;
    rfc: string;
    curp: string;
    phone: string;
    email: string;
    birthDate: Date;
    salary: number;
    role: string;
    status = true;
}
