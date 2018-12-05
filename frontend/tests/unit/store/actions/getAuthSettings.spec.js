import action from '@/store/actions/getAuthSettings'

import getDataService from '@/logic/get/data'

import { MUTATIONS } from '@/store/mutations'

describe('getAuthSettings', () => {
  let context = {
    state: {

    },
    commit: jest.fn()
  }

  afterEach(() => {
    context.commit.mockClear()
    getDataService.getAuthSettings.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when authSettings are resolved', () => {
    let _context
    beforeEach(async () => {
      _context = Object.assign({}, context, {
        state: {
          authSettings: {
            client: 'some client',
            authority: 'some authority'
          }
        }
      })

      await action(_context)
    })

    it('should NOT call getDataService getAuthSettings', () => {
      expect(getDataService.getAuthSettings).not.toHaveBeenCalled()
    })

    it('should NOT call commit with mutation SET_AUTH_SETTINGS', () => {
      expect(_context.commit).not.toHaveBeenCalled()
    })
  })

  describe('when authSettings are NOT resolved', () => {
    beforeEach(async () => {
      await action(context)
    })

    it('should call getDataService getAuthSettings', () => {
      expect(getDataService.getAuthSettings).toHaveBeenCalledTimes(1)
    })
  })

  describe('when getDataService getAuthSettings returns a valid response', () => {
    beforeEach(async () => {
      await action(context)
    })

    it('should call commit with mutation SET_AUTH_SETTINGS and data', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.SET_AUTH_SETTINGS, { client: 'some-client', authority: 'some authority' })
    })
  })

  describe('when getDataService getAuthSettings NOT returns a valid response', () => {
    beforeEach(async () => {
      getDataService.getAuthSettings.mockImplementationOnce(async () => null)
      await action(context)
    })

    it('should NOT call commit with mutation SET_AUTH_SETTINGS', () => {
      expect(context.commit).not.toHaveBeenCalled()
    })
  })
})

jest.mock('@/logic/get/data', () => ({
  getAuthSettings: jest.fn().mockImplementation(async () => { return Promise.resolve({ client: 'some-client', authority: 'some authority' }) })
}))
