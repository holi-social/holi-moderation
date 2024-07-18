import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsInt, Min, Max } from 'class-validator'

@ObjectType()
export class Success {
  @Field()
  success: boolean
}

@InputType()
export class Pagination {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10

  @Field(() => Int)
  @IsInt()
  @Min(0)
  offset?: number = 0
}
