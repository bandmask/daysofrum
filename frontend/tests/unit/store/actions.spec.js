import getYears from '@/store/actions/getYears'
import getRatings from '@/store/actions/getRatings'
import setActiveYear from '@/store/actions/setActiveYear'

import { default as actions, ACTIONS } from '@/store/actions'

describe('actions', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('getYears', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.GET_YEARS).toBeDefined()
      expect(ACTIONS.GET_YEARS).toEqual('a_getYears')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.GET_YEARS]).toEqual(getYears)
    })
  })

  describe('getRatings', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.GET_RATINGS).toBeDefined()
      expect(ACTIONS.GET_RATINGS).toEqual('a_getRatings')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.GET_RATINGS]).toEqual(getRatings)
    })
  })

  describe('setActiveYear', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.SET_ACTIVE_YEAR).toBeDefined()
      expect(ACTIONS.SET_ACTIVE_YEAR).toEqual('a_setActiveYear')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.SET_ACTIVE_YEAR]).toEqual(setActiveYear)
    })
  })
})

jest.mock('@/store/actions/getYears', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/getRatings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/setActiveYear', () => jest.fn().mockImplementation(() => ({})))
