import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entity-typeorm/project.entity';
import { ProjectService } from './project.service';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(project: CreateProjectInput): Promise<{
        name: string;
        code: number;
    } & Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    removeProject(id: string): Promise<string>;
    resolvereferance(ref: {
        __typename: string;
        id: string;
    }): Promise<Project>;
}
