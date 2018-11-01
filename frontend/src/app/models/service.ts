import { Automobile } from './automobile';
import { Employee } from './employee';

export class Service {
    id: string;
    auto: Automobile;
    employee: Employee;
    entreDate: Date;
    endedDate: Date;
    description: string;
    status: boolean;
}
