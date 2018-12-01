import getYears from '@/store/actions/getYears'
import getRatings from '@/store/actions/getRatings'
import setActiveYear from '@/store/actions/setActiveYear'

export const ACTIONS = {
  GET_YEARS: 'a_getYears',
  GET_RATINGS: 'a_getRatings',
  SET_ACTIVE_YEAR: 'a_setActiveYear'
}

export default {
  [ACTIONS.GET_YEARS]: getYears,
  [ACTIONS.GET_RATINGS]: getRatings,
  [ACTIONS.SET_ACTIVE_YEAR]: setActiveYear
}
