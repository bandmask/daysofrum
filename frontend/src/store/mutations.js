import orientation from '@/store/mutations/orientation'
import scroll from '@/store/mutations/scroll'
import setData from '@/store/mutations/setData'
import setYears from '@/store/mutations/setYears'
import setRatings from '@/store/mutations/setRatings'
import setActiveYear from '@/store/mutations/setActiveYear'
import setAuthSettings from '@/store/mutations/setAuthSettings'
import accountSetUserSignedIn from '@/store/mutations/accountSetUserSignedIn'
import accountSetRegisterModel from '@/store/mutations/accountSetRegisterModel'
import accountSetLoginModel from '@/store/mutations/accountSetLoginModel'
import accountSetLoginResult from '@/store/mutations/accountSetLoginResult'

export const MUTATIONS = {
  ORIENTATION: 'm_orientation',
  SCROLL: 'm_scroll',
  SET_DATA: 'm_setData',
  SET_YEARS: 'm_setYears',
  SET_RATINGS: 'm_setRatings',
  SET_ACTIVE_YEAR: 'm_setActiveYear',
  SET_AUTH_SETTINGS: 'm_setAuthSettings',
  ACCOUNT_SET_USER_SIGNED_IN: 'm_accountSetUserSignedIn',
  ACCOUNT_SET_REGISTER_MODEL: 'm_accountSetRegisterModel',
  ACCOUNT_SET_LOGIN_MODEL: 'm_accountSetLoginModel',
  ACCOUNT_SET_LOGIN_RESULT: 'm_accountSetLoginResult'
}

export default {
  [MUTATIONS.ORIENTATION]: orientation,
  [MUTATIONS.SCROLL]: scroll,
  [MUTATIONS.SET_DATA]: setData,
  [MUTATIONS.SET_YEARS]: setYears,
  [MUTATIONS.SET_RATINGS]: setRatings,
  [MUTATIONS.SET_ACTIVE_YEAR]: setActiveYear,
  [MUTATIONS.SET_AUTH_SETTINGS]: setAuthSettings,
  [MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN]: accountSetUserSignedIn,
  [MUTATIONS.ACCOUNT_SET_REGISTER_MODEL]: accountSetRegisterModel,
  [MUTATIONS.ACCOUNT_SET_LOGIN_MODEL]: accountSetLoginModel,
  [MUTATIONS.ACCOUNT_SET_LOGIN_RESULT]: accountSetLoginResult
}
