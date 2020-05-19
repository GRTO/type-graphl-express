import { Resolver, Arg, Query } from "type-graphql";
import { FeatureWeight } from "../entities/featureWeight";
import { GET, BaseURL } from "../utils/api-utils";
import { getMax, getMin, sortByTime } from "../utils/utils";

@Resolver()
export class FeatureWeightResolver {
  @Query(() => FeatureWeight)
  async getFeatureWeight(
    @Arg("modelId") modelid: number,
    @Arg("startTime") start_time: string,
    @Arg("endTime") end_time: string,
    @Arg("featureLimit") feature_limit: number,
    @Arg("samplingRate") sampling_rate: number
  ) {
    console.log("Here in getFeatureWeight");
    const riskdata = await GET(
      `${BaseURL}/api/riskdata?modelId=${modelid}&startTime=${start_time}&endTime=${end_time}&featureLimit=${feature_limit}&samplingRate=${sampling_rate}`
    );
    const stats = await GET(
      `${BaseURL}/api/features/importance/stats?model_id=${modelid}&start_time=${start_time}&end_time=${end_time}`
    );
    const {
      data: { feature_stats },
    } = stats;
    const featureWeightMax = getMax(feature_stats, "max");
    const featureWeightMin = getMin(feature_stats, "min");

    const featureWeight = sortByTime(riskdata, "timestamp");

    return { featureWeightMax, featureWeightMin, featureWeight };
  }
}
