import getDataService from '@/logic/get/data'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

export default async context => {
  let years = await getDataService.getYears()

  let activeYear = years[0]
  context.commit(MUTATIONS.SET_YEARS, years)

  context.dispatch(ACTIONS.SET_ACTIVE_YEAR, activeYear)
}
