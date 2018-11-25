export default (state, payload) => {
  state.model = state.model.filter(rating => rating.year !== payload.year).concat(payload.ratings)
}
