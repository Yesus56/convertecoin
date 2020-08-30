import { isUndefined } from "lodash";

export function comparateError(data) {
  if (!isUndefined(data.error)) {
    throw new Error(data.error.details[0].message);
  }
}
