import orientation from '@/store/mutations/orientation'
import scroll from '@/store/mutations/scroll'
import setData from '@/store/mutations/setData'
import setYears from '@/store/mutations/setYears'
import setRatings from '@/store/mutations/setRatings'
import setActiveYear from '@/store/mutations/setActiveYear'

import { default as mutations, MUTATIONS } from '@/store/mutations'

describe('mutations', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('orientation', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ORIENTATION).toBeDefined()
      expect(MUTATIONS.ORIENTATION).toEqual('m_orientation')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ORIENTATION]).toEqual(orientation)
    })
  })

  describe('scroll', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SCROLL).toBeDefined()
      expect(MUTATIONS.SCROLL).toEqual('m_scroll')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SCROLL]).toEqual(scroll)
    })
  })

  describe('setData', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SET_DATA).toBeDefined()
      expect(MUTATIONS.SET_DATA).toEqual('m_setData')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SET_DATA]).toEqual(setData)
    })
  })

  describe('setYears', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SET_YEARS).toBeDefined()
      expect(MUTATIONS.SET_YEARS).toEqual('m_setYears')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SET_YEARS]).toEqual(setYears)
    })
  })

  describe('setRatings', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SET_RATINGS).toBeDefined()
      expect(MUTATIONS.SET_RATINGS).toEqual('m_setRatings')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SET_RATINGS]).toEqual(setRatings)
    })
  })

  describe('setActiveYear', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SET_ACTIVE_YEAR).toBeDefined()
      expect(MUTATIONS.SET_ACTIVE_YEAR).toEqual('m_setActiveYear')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SET_ACTIVE_YEAR]).toEqual(setActiveYear)
    })
  })
})

jest.mock('@/store/mutations/orientation', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/scroll', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setData', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setYears', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setRatings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setActiveYear', () => jest.fn().mockImplementation(() => ({})))
