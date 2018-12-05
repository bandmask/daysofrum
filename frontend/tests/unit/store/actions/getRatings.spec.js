import action from '@/store/actions/getRatings'

import { MUTATIONS } from '@/store/mutations'

import getDataService from '@/logic/get/data'

describe('getRatings', () => {
  let payload = 2018

  let context = {
    commit: jest.fn()
  }

  beforeEach(async () => {
    await action(context, payload)
  })

  afterEach(() => {
    context.commit.mockClear()
    getDataService.getRatings.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call getDataService getRatings', () => {
    expect(getDataService.getRatings).toHaveBeenCalledWith(payload)
  })

  it('should call commit with mutation SET_RATING and data', () => {
    expect(context.commit).toHaveBeenCalledWith(MUTATIONS.SET_RATINGS, { year: payload, ratings: { some: 'data' } })
  })
})

jest.mock('@/logic/get/data', () => ({
  getRatings: jest.fn().mockImplementation(async year => { return Promise.resolve({ some: 'data' }) })
}))
