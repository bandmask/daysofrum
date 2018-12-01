import action from '@/store/actions/getRatings'

import { MUTATIONS } from '@/store/mutations'

import getDataService from '@/logic/get/data'

describe('getRatings', () => {
  let context = {
    commit: (type, payload) => { }
  }
  let payload = 2018

  let commitSpy

  beforeAll(() => {
    commitSpy = jest.spyOn(context, 'commit')
  })

  beforeEach(async () => {
    await action(context, payload)
  })

  afterEach(() => {
    commitSpy.mockClear()

    getDataService.getRatings.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call getDataService getRatings', () => {
    let calls = getDataService.getRatings.mock.calls
    expect(calls.length).toBe(1)

    let args = calls[0]
    expect(args.length).toBe(1)

    let year = args[0]
    expect(year).toEqual(payload)
  })

  it('should call commit with mutation SET_RATING and data', () => {
    let calls = commitSpy.mock.calls
    expect(calls.length).toBe(1)

    let args = calls[0]
    expect(args.length).toBe(2)

    let mutation = args[0]
    let data = args[1]
    expect(mutation).toBe(MUTATIONS.SET_RATINGS)
    expect(data).toEqual({ year: payload, ratings: { some: 'data' } })
  })
})

jest.mock('@/logic/get/data', () => ({
  getRatings: jest.fn().mockImplementation(async year => { return Promise.resolve({ some: 'data' }) })
}))
