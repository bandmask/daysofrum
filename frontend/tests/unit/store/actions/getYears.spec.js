import action from '@/store/actions/getYears'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

import getDataService from '@/logic/get/data'

describe('getYears', () => {
  let context = {
    commit: jest.fn(),
    dispatch: jest.fn()
  }

  let realDate
  const date2017 = new Date(2017, 1, 1).getTime()
  const date2019 = new Date(2019, 1, 1).getTime()

  beforeAll(() => {
    realDate = global.Date
    global.Date.now = jest.fn().mockImplementation(() => date2017)
  })

  afterEach(() => {
    context.commit.mockClear()
    context.dispatch.mockClear()
    getDataService.getYears.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()

    global.Date = realDate
  })

  describe('when getting years', () => {
    beforeEach(async () => {
      await action(context)
    })

    it('should call getDataService getYears', () => {
      expect(getDataService.getYears).toHaveBeenCalledTimes(1)
    })

    it('should call commit with mutation SET_YEARS and data', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.SET_YEARS, [{ year: 2018 }, { year: 2019 }, { year: 2020 }])
    })
  })

  describe('when current year exists', () => {
    beforeEach(async () => {
      global.Date.now.mockImplementationOnce(() => date2019)
      await action(context)
    })

    it('should call dispatch with action SET_ACTIVE_YEAR and current year', () => {
      expect(context.dispatch).toHaveBeenCalledWith(ACTIONS.SET_ACTIVE_YEAR, { year: 2019 })
    })
  })

  describe('when current year NOT exists', () => {
    beforeEach(async () => {
      global.Date.now.mockImplementationOnce(() => date2017)
      await action(context)
    })

    it('should call dispatch with action SET_ACTIVE_YEAR and max year', () => {
      expect(context.dispatch).toHaveBeenCalledWith(ACTIONS.SET_ACTIVE_YEAR, { year: 2020 })
    })
  })
})

jest.mock('@/logic/get/data', () => ({
  getYears: jest.fn().mockImplementation(async () => { return Promise.resolve([{ year: 2019 }, { year: 2020 }, { year: 2018 }]) })
}))
