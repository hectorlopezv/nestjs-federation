import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity-typeorm/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll() {
    return this.employeeRepository.find({});
  }
  async findOne(id: string) {
    return this.employeeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(employee: EmployeeCreateDTO) {
    console.log('emp', employee);
    return this.employeeRepository.save({
      city: employee.city,
      designation: employee.designation,
      firstName: employee.firstName,
      lastName: employee.lastName,
      projectId: String(employee.projectId),
    });
  }
}
