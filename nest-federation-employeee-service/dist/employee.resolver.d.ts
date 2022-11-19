import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entity-typeorm/employee.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreateDTO): Promise<{
        city: string;
        designation: string;
        firstName: string;
        lastName: string;
        projectId: string;
    } & Employee>;
    findOne(id: string, info: any): Promise<Employee>;
    project(employee: Employee): {
        __typename: string;
        id: string;
    };
}
