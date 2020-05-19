import { InputType, Field } from "type-graphql";
import { FeatureWeight } from "../../entities/featureWeight";
// import { FeatureWeightData } from "../../entities/featureWeightData";

@InputType()
export class FeatureWeightInput implements Partial<FeatureWeight> {
  @Field()
  featureWeightMax: number;

  @Field()
  featureWeightMin: number;

  // @Field(type => FeatureWeightData)
  // featureWeight: FeatureWeightData[];
}
