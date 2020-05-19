import { ObjectType, Field } from "type-graphql";
import { getModelForClass } from "@typegoose/typegoose";
import { FeatureWeightData } from "./featureWeightData";

@ObjectType({ description: "The feature weight model" })
export class FeatureWeight {
  @Field()
  featureWeightMax: number;

  @Field()
  featureWeightMin: number;

  @Field(() => [FeatureWeightData])
  featureWeight: FeatureWeightData[];
}

export const FeatureWeightModel = getModelForClass(FeatureWeight);
