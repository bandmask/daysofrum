import getYears from '@/store/actions/getYears'
import getRatings from '@/store/actions/getRatings'
import setActiveYear from '@/store/actions/setActiveYear'
import uploadFile from '@/store/actions/uploadFile'

export const ACTIONS = {
  GET_YEARS: 'a_getYears',
  GET_RATINGS: 'a_getRatings',
  SET_ACTIVE_YEAR: 'a_setActiveYear',
  UPLOAD_FILE: 'a_uploadFile'
}

export default {
  [ACTIONS.GET_YEARS]: getYears,
  [ACTIONS.GET_RATINGS]: getRatings,
  [ACTIONS.SET_ACTIVE_YEAR]: setActiveYear,
  [ACTIONS.UPLOAD_FILE]: uploadFile
}
