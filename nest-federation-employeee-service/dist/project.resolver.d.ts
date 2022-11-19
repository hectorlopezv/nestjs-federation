import { Repository } from 'typeorm';
import { Employee } from './entity-typeorm/employee.entity';
import { Project } from './entity-typeorm/project.entity';
export declare class ProjectResolver {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    employees(project: Project): Promise<Employee[]>;
}
