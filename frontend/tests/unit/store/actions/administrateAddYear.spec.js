import action from '@/store/actions/administrateAddYear'
import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

describe('administrateAddYear', () => {
  let context = {
    commit: jest.fn().mockImplementation(() => { })
  }

  let payload = {
    year: 2018,
    description: 'someDescription'
  }

  afterEach(() => {
    context.commit.mockClear()
    postDataService.postYear.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when adding is successful', () => {
    beforeEach(async () => {
      await action(context, payload)
    })

    it('should call postDataService postYear', () => {
      expect(postDataService.postYear).toHaveBeenCalledTimes(1)
      expect(postDataService.postYear).toHaveBeenCalledWith(payload)
    })

    it('should call commit with mutation ADMINISTRATE_ADD_YEAR and data', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_YEAR, payload)
    })
  })

  describe('when postDataService throws exception', () => {
    let error = { some: 'error' }

    beforeEach(async () => {
      postDataService.postYear.mockImplementationOnce(() => Promise.reject(error))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_YEAR and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_YEAR, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and error', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, error)
    })
  })

  describe('when postDataService returns NOT successful result', () => {
    let updateError = new Error({ message: 'update failed' })

    beforeEach(async () => {
      postDataService.postYear.mockImplementationOnce(() => Promise.resolve(false))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_YEAR and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_YEAR, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and updateError', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, updateError)
    })
  })
})

jest.mock('@/logic/post/data', () => ({
  postYear: jest.fn().mockImplementation(() => Promise.resolve(true))
}))
