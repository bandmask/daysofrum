import action from '@/store/actions/administrateRemoveRating'
import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

describe('administrateRemoveRating', () => {
  let context = {
    commit: jest.fn().mockImplementation(() => { })
  }

  let payload = { year: 2018, day: 1 }

  afterEach(() => {
    context.commit.mockClear()
    postDataService.deleteRating.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when delete is successful', () => {
    beforeEach(async () => {
      await action(context, payload)
    })

    it('should call postDataService deleteRating', () => {
      expect(postDataService.deleteRating).toHaveBeenCalledTimes(1)
      expect(postDataService.deleteRating).toHaveBeenCalledWith(payload.year, payload.day)
    })

    it('should call commit with ADMINISTRATE_REMOVE_YEAR', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_REMOVE_RATING, payload)
    })
  })
})

jest.mock('@/logic/post/data', () => ({
  deleteRating: jest.fn().mockImplementation(() => Promise.resolve(true))
}))
