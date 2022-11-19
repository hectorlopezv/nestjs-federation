import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entity-typeorm/project.entity';

import { ProjectService } from './project.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(@Args('project') project: CreateProjectInput) {
    return this.projectService.create(project);
  }

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id') id: string) {
    return this.projectService.findOne(id);
  }

  //   @Mutation(() => Project)
  //   updateProject(@Args('project') project: UpdateProjectInput) {
  //     return this.projectService.update(project.id, project);
  //   }

  @Mutation(() => Project)
  removeProject(@Args('id') id: string) {
    return this.projectService.remove(id);
  }

  @ResolveReference()
  resolvereferance(ref: { __typename: string; id: string }) {
    console.log('__typename', ref.__typename, ref.id);
    return this.projectService.findOne(ref.id);
  }
}
