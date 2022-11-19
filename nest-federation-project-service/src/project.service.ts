import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entity-typeorm/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projecteRepository: Repository<Project>,
  ) {}

  create(project: CreateProjectInput) {
    console.log('project', project);
    return this.projecteRepository.save({
      name: project.name,
      code: Number(project.code),
    });
  }

  async findAll(args?: FindManyOptions<Project>) {
    return this.projecteRepository.find(args);
  }

  async findOne(id: string) {
    console.log('id', id);
    return this.projecteRepository.findOne({ where: { code: Number(id) } });
  }

  //   update(id: string, updateProjectInput: UpdateProjectInput) {
  //     return '';
  //   }

  async remove(id: string) {
    return '';
  }
}
