import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity-typeorm/employee.entity';
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: EmployeeCreateDTO): Promise<{
        city: string;
        designation: string;
        firstName: string;
        lastName: string;
        projectId: string;
    } & Employee>;
}
