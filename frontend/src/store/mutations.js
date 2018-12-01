import orientation from '@/store/mutations/orientation'
import scroll from '@/store/mutations/scroll'
import setData from '@/store/mutations/setData'
import setYears from '@/store/mutations/setYears'
import setRatings from '@/store/mutations/setRatings'
import setActiveYear from '@/store/mutations/setActiveYear'

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
