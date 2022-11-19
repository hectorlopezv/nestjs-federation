import { FindManyOptions, Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entity-typeorm/project.entity';
export declare class ProjectService {
    private projecteRepository;
    constructor(projecteRepository: Repository<Project>);
    create(project: CreateProjectInput): Promise<{
        name: string;
        code: number;
    } & Project>;
    findAll(args?: FindManyOptions<Project>): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    remove(id: string): Promise<string>;
}
