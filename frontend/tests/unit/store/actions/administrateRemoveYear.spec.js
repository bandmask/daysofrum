import action from '@/store/actions/administrateRemoveYear'
import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

describe('administrateRemoveYear', () => {
  let context = {
    commit: jest.fn().mockImplementation(() => { })
  }

  let payload = 2018

  afterEach(() => {
    context.commit.mockClear()
    postDataService.deleteYear.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when delete is successful', () => {
    beforeEach(async () => {
      await action(context, payload)
    })

    it('should call postDataService deleteYear', () => {
      expect(postDataService.deleteYear).toHaveBeenCalledTimes(1)
      expect(postDataService.deleteYear).toHaveBeenCalledWith(payload)
    })

    it('should call commit with ADMINISTRATE_REMOVE_YEAR', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_REMOVE_YEAR, payload)
    })
  })
})

jest.mock('@/logic/post/data', () => ({
  deleteYear: jest.fn().mockImplementation(() => Promise.resolve(true))
}))
