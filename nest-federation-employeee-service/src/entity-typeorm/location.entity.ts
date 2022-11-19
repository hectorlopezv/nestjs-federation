import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Employee } from './employee.entity';
@ObjectType()
@Directive('@key(fields: "id")')
export class Location {
  @Field((type) => ID)
  id: string;

  @Field((type) => [Employee])
  employees: Employee[];
}
