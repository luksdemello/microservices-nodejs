import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePurchasetInput {
  @Field()
  productId: string;
}
