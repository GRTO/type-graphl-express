import { ObjectType, Field } from "type-graphql";
import { getModelForClass } from "@typegoose/typegoose";
import GraphQLJSON from "graphql-type-json";

@ObjectType({ description: "The data feature weight model" })
export class FeatureWeightData {
  @Field(() => GraphQLJSON)
  featureWeights: {
    [key: string]: number;
  };

  @Field()
  highThreshold: number;

  @Field()
  id: string;

  @Field()
  isAlert: boolean;

  @Field()
  lowThreshold: number;

  @Field()
  modelId: number;

  @Field()
  statusCode: number;

  @Field()
  timestamp: string;

  @Field()
  value: number;
}

export const FeatureWeightDataModel = getModelForClass(FeatureWeightData); 