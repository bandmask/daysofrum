const validate = year => {
  return year.year && !isNaN(year.year) && year.description
}

export default {
  validate: validate
}
