import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entity-typeorm/employee.entity';
import { Project } from './entity-typeorm/project.entity';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  @ResolveField(() => Employee)
  employees(@Parent() project: Project) {
    console.log('project', project);
    return this.employeeRepository.find({ where: { id: project.id } });
  }
}
