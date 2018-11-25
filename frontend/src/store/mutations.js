import orientation from './mutations/orientation'
import scroll from './mutations/scroll'
import setData from './mutations/setData'
import setYears from './mutations/setYears'
import setRatings from './mutations/setRatings'
import setActiveYear from './mutations/setActiveYear'

export const MUTATIONS = {
  ORIENTATION: 'm_orientation',
  SCROLL: 'm_scroll',
  SET_DATA: 'm_setData',
  SET_YEARS: 'm_setYears',
  SET_RATINGS: 'm_setRatings',
  SET_ACTIVE_YEAR: 'm_setActiveYear'
}

export default {
  [MUTATIONS.ORIENTATION]: orientation,
  [MUTATIONS.SCROLL]: scroll,
  [MUTATIONS.SET_DATA]: setData,
  [MUTATIONS.SET_YEARS]: setYears,
  [MUTATIONS.SET_RATINGS]: setRatings,
  [MUTATIONS.SET_ACTIVE_YEAR]: setActiveYear
}
