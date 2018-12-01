import action from '@/store/actions/getYears'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

import getDataService from '@/logic/get/data'

describe('getYears', () => {
  let context = {
    commit: (type, payload) => { },
    dispatch: (type, payload) => { }
  }
  let payload = 2018

  let commitSpy
  let dispatchSpy

  beforeAll(() => {
    commitSpy = jest.spyOn(context, 'commit')
    dispatchSpy = jest.spyOn(context, 'dispatch')
  })

  beforeEach(async () => {
    await action(context, payload)
  })

  afterEach(() => {
    commitSpy.mockClear()
    dispatchSpy.mockClear()

    getDataService.getYears.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call getDataService getYears', () => {
    let calls = getDataService.getYears.mock.calls
    expect(calls.length).toBe(1)

    let args = calls[0]
    expect(args.length).toBe(0)
  })

  it('should call commit with mutation SET_YEARS and data', () => {
    let calls = commitSpy.mock.calls
    expect(calls.length).toBe(1)

    let args = calls[0]
    expect(args.length).toBe(2)

    let mutation = args[0]
    let data = args[1]
    expect(mutation).toBe(MUTATIONS.SET_YEARS)
    expect(data).toEqual([{ year: 'first' }, { year: 'second' }])
  })

  it('should call dispatch with action SET_ACTIVE_YEAR and first year', () => {
    let calls = dispatchSpy.mock.calls
    expect(calls.length).toBe(1)

    let args = calls[0]
    expect(args.length).toBe(2)

    let action = args[0]
    let data = args[1]
    expect(action).toBe(ACTIONS.SET_ACTIVE_YEAR)
    expect(data).toEqual({ year: 'first' })
  })
})

jest.mock('@/logic/get/data', () => ({
  getYears: jest.fn().mockImplementation(async () => { return Promise.resolve([{ year: 'first' }, { year: 'second' }]) })
}))
