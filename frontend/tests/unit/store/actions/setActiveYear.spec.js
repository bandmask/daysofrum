import action from '@/store/actions/setActiveYear'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

describe('setActiveYear', () => {
  let payload

  let context = {
    state: {},
    commit: jest.fn(),
    dispatch: jest.fn()
  }

  afterEach(() => {
    context.commit.mockClear()
    context.dispatch.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when changing year', () => {
    let _context
    beforeEach(async () => {
      payload = 2018

      _context = Object.assign({}, context, {
        state: {
          activeYear: 2017,
          model: []
        }
      })

      await action(_context, payload)
    })

    it('should call commit with mutation SET_ACTIVE_YEAR and year', () => {
      expect(_context.commit).toHaveBeenCalledWith(MUTATIONS.SET_ACTIVE_YEAR, payload)
    })
  })

  describe('when NOT changing year', () => {
    let _context
    beforeEach(async () => {
      payload = 2018

      _context = Object.assign({}, context, {
        state: {
          activeYear: 2018,
          model: []
        }
      })

      await action(_context, payload)
    })

    it('should NOT call commit with mutation SET_ACTIVE_YEAR', () => {
      expect(_context.commit).not.toHaveBeenCalled()
    })
  })

  describe('when state model contains entries for year', () => {
    let _context

    beforeEach(async () => {
      payload = { year: 2018 }

      _context = Object.assign({}, context, {
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
      expect(_context.dispatch).not.toHaveBeenCalled()
    })
  })

  describe('when state model NOT contains entries for year', () => {
    let _context

    beforeEach(async () => {
      payload = { year: 2018 }
      _context = Object.assign({}, context, {
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
      expect(context.dispatch).toHaveBeenCalledWith(ACTIONS.GET_RATINGS, payload.year)
    })
  })
})
