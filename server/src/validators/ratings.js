import { isNumber } from "util";

const validate = rating => {
  return rating.year && rating.day && rating.name
}

const validateYearAndDay = (year, day) => {
  return isNumber(year) && isNumber(day)
}

export default {
  validate: validate,
  validateYearAndDay: validateYearAndDay
}
