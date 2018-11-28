import { Automobile } from './automobile';
import { Employee } from './employee';
import { Client } from './client';

export class Service {
    id: string;
    auto: Automobile;
    client: Client;
    employee: Employee;
    entreDate = Date();
    endedDate = Date();
    description: string;
    status = true;
}
