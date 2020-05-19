import { InputType, Field } from "type-graphql";
import { FeatureWeight } from "../../entities/featureWeight";

@InputType()
export class FeatureWeightInput implements Partial<FeatureWeight> {
  @Field()
  featureWeightMax: number;

  @Field()
  featureWeightMin: number;
}
