import { ObjectType, Field } from "type-graphql";
import { getModelForClass } from "@typegoose/typegoose";
import { FeatureWeightData } from "./featureWeightData";

export interface TypeFeatureWeight {
  featureWeights: [{ [key: string]: number }];
  highThreshold: number;
  id: string;
  isAlert: boolean;
  lowThreshold: number;
  modelId: number;
  statusCode: number;
  timestamp: string;
  value: number;
}

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
