export default (state, payload) => {
  state.ratings = state.ratings.filter(rating => !equals(rating, payload))
}

const equals = (rating, payload) => {
  return rating.year === payload.year && rating.day === payload.day
}
