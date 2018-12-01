import action from '@/store/actions/setActiveYear'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

describe('setActiveYear', () => {
  let context = {
    state: {},
    commit: (type, payload) => { },
    dispatch: (type, payload) => { }
  }

  let payload

  let commitSpy
  let dispatchSpy

  beforeAll(() => {
    commitSpy = jest.spyOn(context, 'commit')
    dispatchSpy = jest.spyOn(context, 'dispatch')
  })

  afterEach(() => {
    commitSpy.mockClear()
    dispatchSpy.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when changing year', () => {
    beforeEach(async () => {
      payload = 2018
      let _context = Object.assign({}, context, {
        state: {
          activeYear: 2017,
          model: []
        }
      })

      await action(_context, payload)
    })

    it('should call commit with mutation SET_ACTIVE_YEAR and year', () => {
      let calls = commitSpy.mock.calls
      expect(calls.length).toBe(1)

      let args = calls[0]
      expect(args.length).toBe(2)

      let mutation = args[0]
      let data = args[1]
      expect(mutation).toBe(MUTATIONS.SET_ACTIVE_YEAR)
      expect(data).toEqual(payload)
    })
  })

  describe('when NOT changing year', () => {
    beforeEach(async () => {
      payload = 2018
      let _context = Object.assign({}, context, {
        state: {
          activeYear: 2018,
          model: []
        }
      })

      await action(_context, payload)
    })

    it('should NOT call commit with mutation SET_ACTIVE_YEAR', () => {
      let calls = commitSpy.mock.calls
      expect(calls.length).toBe(0)
    })
  })

  describe('when state model contains entries for year', () => {
    beforeEach(async () => {
      payload = { year: 2018 }
      let _context = Object.assign({}, context, {
        state: {
          activeYear: 2018,
          model: [{
            year: 2018,
            some: 'model'
          }]
        }
      })

      await action(_context, payload)
    })

    it('should NOT call dispatch with action GET_RATINGS', () => {
      let calls = dispatchSpy.mock.calls
      expect(calls.length).toBe(0)
    })
  })

  describe('when state model NOT contains entries for year', () => {
    beforeEach(async () => {
      payload = { year: 2018 }
      let _context = Object.assign({}, context, {
        state: {
          activeYear: 2018,
          model: [{
            year: 2017,
            some: 'model'
          }]
        }
      })

      await action(_context, payload)
    })

    it('should call dispatch with action GET_RATINGS and year', () => {
      let calls = dispatchSpy.mock.calls
      expect(calls.length).toBe(1)

      let args = calls[0]
      expect(args.length).toBe(2)

      let action = args[0]
      let data = args[1]
      expect(action).toBe(ACTIONS.GET_RATINGS)
      expect(data).toEqual(payload.year)
    })
  })
})
