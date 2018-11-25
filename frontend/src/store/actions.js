import getYears from './actions/getYears'
import getRatings from './actions/getRatings'
import setActiveYear from './actions/setActiveYear'

export const ACTIONS = {
  GET_YEARS: 'a_loadYears',
  GET_RATINGS: 'a_loadRatings',
  SET_ACTIVE_YEAR: 'a_setActiveYear'
}

export default {
  [ACTIONS.GET_YEARS]: getYears,
  [ACTIONS.GET_RATINGS]: getRatings,
  [ACTIONS.SET_ACTIVE_YEAR]: setActiveYear
}
