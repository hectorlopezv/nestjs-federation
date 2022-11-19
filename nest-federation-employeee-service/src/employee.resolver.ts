import {
  Args,
  Info,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/create-employee.input';

import { EmployeeService } from './employee.service';
import { Employee } from './entity-typeorm/employee.entity';
import { Project } from './entity-typeorm/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }
  @Query(() => Employee, { name: 'findEmployee' })
  findOne(@Args('id') id: string, @Info() info) {
    return this.employeeService.findOne(id);
  }
  @ResolveField((of) => Project)
  project(@Parent() employee: Employee) {
    console.log('employee', employee);
    return {
      __typename: 'Project',
      id: employee.projectId,
    };
  }
}
