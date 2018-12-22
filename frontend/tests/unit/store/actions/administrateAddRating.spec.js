import action from '@/store/actions/administrateAddRating'
import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

describe('administrateAddRating', () => {
  let context = {
    commit: jest.fn().mockImplementation(() => { })
  }

  let payload

  afterEach(() => {
    context.commit.mockClear()
    postDataService.postRating.mockClear()
    postDataService.postImage.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when adding rating is successful', () => {
    beforeEach(async () => {
      payload = {
        year: 2018,
        rating: {
          day: 1,
          some: 'model'
        },
        image: {
          some: 'image'
        }
      }

      await action(context, payload)
    })

    it('should call postDataService postRating', () => {
      expect(postDataService.postRating).toHaveBeenCalledTimes(1)
      let rating = Object.assign({}, payload.rating, {
        year: payload.year
      })
      expect(postDataService.postRating).toHaveBeenCalledWith(rating)
    })

    it('should call postDataService postImage', () => {
      expect(postDataService.postImage).toHaveBeenCalledTimes(1)
      expect(postDataService.postImage).toHaveBeenCalledWith(payload.year, payload.rating.day, payload.image)
    })

    it('should call commit with ADMINISTRATE_ADD_RATING and data', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
      let rating = Object.assign({}, payload.rating, {
        year: payload.year,
        image: payload.image
      })
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_RATING, rating)
    })
  })

  describe('when postDataService postRating throws exception', () => {
    let error = { some: 'error' }

    beforeEach(async () => {
      postDataService.postRating.mockImplementationOnce(() => Promise.reject(error))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_RATING and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_RATING, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and error', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, error)
    })
  })

  describe('when postDataService postImage throws exception', () => {
    let error = { some: 'error' }

    beforeEach(async () => {
      postDataService.postImage.mockImplementationOnce(() => Promise.reject(error))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_RATING and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_RATING, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and error', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, error)
    })
  })

  describe('when postDataService postRating returns NOT successful result', () => {
    let updateError = new Error({ message: 'update failed' })

    beforeEach(async () => {
      postDataService.postRating.mockImplementationOnce(() => Promise.resolve(false))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_RATING and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_RATING, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and updateError', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, updateError)
    })
  })

  describe('when postDataService postImage returns NOT successful result', () => {
    let updateError = new Error({ message: 'update failed' })

    beforeEach(async () => {
      postDataService.postImage.mockImplementationOnce(() => Promise.resolve(false))
      await action(context, payload)
    })

    it('should call commit once', () => {
      expect(context.commit).toHaveBeenCalledTimes(1)
    })

    it('should NOT call commit with mutation ADMINISTRATE_ADD_RATING and data', () => {
      expect(context.commit).not.toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ADD_RATING, payload)
    })

    it('should call commit with mutation ADMINISTRATE_ERROR and updateError', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ADMINISTRATE_ERROR, updateError)
    })
  })
})

jest.mock('@/logic/post/data', () => ({
  postRating: jest.fn().mockImplementation(() => Promise.resolve(true)),
  postImage: jest.fn().mockImplementation(() => Promise.resolve(true))
}))
