import moment from "moment";

export const getMax = (array: Array<any>, key?: string) =>
  Math.max.apply(
    Math,
    array.map((element) => (key !== undefined ? element[key] : element))
  );

export const getMin = (array: Array<any>, key?: string) =>
  Math.min.apply(
    Math,
    array.map((element) => (key !== undefined ? element[key] : element))
  );

export const sortByTime = (
  array: Array<any>,
  key: string,
  ascendingOrder: boolean = true
) => {
  return array.sort((a, b) => {
    const x = moment(a[key]);
    const y = moment(b[key]);
    return ascendingOrder ? x.diff(y) : y.diff(x);
  });
};
