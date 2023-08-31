import { Params } from "../../gamesApi";

export function makeQueryString(params: Params) {
  let isTag: boolean = false;
  let queryString = "?";
  Object.entries(params).forEach(([key, value]) => {
    if (value.length > 0) {
      if (key === "sort") key = "sort-by";
      if (key === "tag" && Array.isArray(value)) {
        isTag = true;
        let tempValue = "";
        for (let i = 0; i < value.length; i++) {
          tempValue += `${value[i]}.`;
        }
        tempValue = tempValue.slice(0, -1);
        queryString += `${key}=${tempValue}&`;
      } else queryString += `${key}=${value}&`;
    }
  });

  queryString = "games" + queryString.slice(0, -1);

  return queryString;
}
