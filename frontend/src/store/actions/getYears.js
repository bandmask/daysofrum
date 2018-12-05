import getDataService from '@/logic/get/data'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

export default async context => {
  let years = await getDataService.getYears()

  years.sort((a, b) => a.year - b.year)
  context.commit(MUTATIONS.SET_YEARS, years)

  let activeYear = getActiveYear(years)
  context.dispatch(ACTIONS.SET_ACTIVE_YEAR, activeYear)
}

const getActiveYear = (yearsModel) => {
  if (!yearsModel.length) return null

  let currentYear = new Date(Date.now()).getFullYear()
  let year = yearsModel.find(year => year.year === currentYear)

  return year || yearsModel.find(year => year.year === Math.max(...yearsModel.map(year => year.year)))
}
