export default (state, payload) => {
  state.years = state.years.filter(year => year.year !== payload)
}
