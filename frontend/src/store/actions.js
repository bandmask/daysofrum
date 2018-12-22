import getYears from '@/store/actions/getYears'
import getRatings from '@/store/actions/getRatings'
import setActiveYear from '@/store/actions/setActiveYear'
import uploadFile from '@/store/actions/uploadFile'
import getAuthSettings from '@/store/actions/getAuthSettings'
import accountInit from './actions/accountInit'
import accountRegister from '@/store/actions/accountRegister'
import accountRegisterReset from '@/store/actions/accountRegisterReset'
import accountLogin from '@/store/actions/accountLogin'
import accountLogout from '@/store/actions/accountLogout'
import accountLoginReset from '@/store/actions/accountLoginReset'
import administrateAddYear from '@/store/actions/administrateAddYear'
import administrateRemoveYear from '@/store/actions/administrateRemoveYear'
import administrateAddRating from '@/store/actions/administrateAddRating'
import administrateRemoveRating from '@/store/actions/administrateRemoveRating'

export const ACTIONS = {
  GET_YEARS: 'a_getYears',
  GET_RATINGS: 'a_getRatings',
  SET_ACTIVE_YEAR: 'a_setActiveYear',
  UPLOAD_FILE: 'a_uploadFile',
  GET_AUTH_SETTINGS: 'a_getAuthSettings',
  ACCOUNT_INIT: 'a_accountInit',
  ACCOUNT_REGISTER: 'a_accountRegister',
  ACCOUNT_REGISTER_RESET: 'a_accountRegisterReset',
  ACCOUNT_LOGIN: 'a_accountLogin',
  ACCOUNT_LOGOUT: 'a_accountLogout',
  ACCOUNT_LOGIN_RESET: 'a_accountLoginReset',
  ADMINISTRATE_ADD_YEAR: 'a_administrateAddYear',
  ADMINISTRATE_REMOVE_YEAR: 'a_administrateRemoveYear',
  ADMINISTRATE_ADD_RATING: 'a_administrateAddRating',
  ADMINISTRATE_REMOVE_RATING: 'a_administrateRemoveRating'
}

export default {
  [ACTIONS.GET_YEARS]: getYears,
  [ACTIONS.GET_RATINGS]: getRatings,
  [ACTIONS.SET_ACTIVE_YEAR]: setActiveYear,
  [ACTIONS.UPLOAD_FILE]: uploadFile,
  [ACTIONS.GET_AUTH_SETTINGS]: getAuthSettings,
  [ACTIONS.ACCOUNT_INIT]: accountInit,
  [ACTIONS.ACCOUNT_REGISTER]: accountRegister,
  [ACTIONS.ACCOUNT_REGISTER_RESET]: accountRegisterReset,
  [ACTIONS.ACCOUNT_LOGIN]: accountLogin,
  [ACTIONS.ACCOUNT_LOGOUT]: accountLogout,
  [ACTIONS.ACCOUNT_LOGIN_RESET]: accountLoginReset,
  [ACTIONS.ADMINISTRATE_ADD_YEAR]: administrateAddYear,
  [ACTIONS.ADMINISTRATE_REMOVE_YEAR]: administrateRemoveYear,
  [ACTIONS.ADMINISTRATE_ADD_RATING]: administrateAddRating,
  [ACTIONS.ADMINISTRATE_REMOVE_RATING]: administrateRemoveRating
}
