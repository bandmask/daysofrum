export default (state, payload) => {
  state.ratings = state.ratings.filter(rating => rating.year !== payload.year).concat(payload.ratings)
}
