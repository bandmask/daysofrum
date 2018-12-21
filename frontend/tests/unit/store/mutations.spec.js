import orientation from '@/store/mutations/orientation'
import scroll from '@/store/mutations/scroll'
import setData from '@/store/mutations/setData'
import setYears from '@/store/mutations/setYears'
import setRatings from '@/store/mutations/setRatings'
import setActiveYear from '@/store/mutations/setActiveYear'
import setAuthSettings from '@/store/mutations/setAuthSettings'
import accountSetUserSignedIn from '@/store/mutations/accountSetUserSignedIn'
import accountSetRegisterModel from '@/store/mutations/accountSetRegisterModel'
import accountSetLoginModel from '@/store/mutations/accountSetLoginModel'
import accountSetLoginResult from '@/store/mutations/accountSetLoginResult'
import administrateAddYear from '@/store/mutations/administrateAddYear'
import administrateRemoveYear from '@/store/mutations/administrateRemoveYear'
import administrateError from '@/store/mutations/administrateError'

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

  describe('setAuthSettings', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.SET_AUTH_SETTINGS).toBeDefined()
      expect(MUTATIONS.SET_AUTH_SETTINGS).toEqual('m_setAuthSettings')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.SET_AUTH_SETTINGS]).toEqual(setAuthSettings)
    })
  })

  describe('accountSetUserSignedIn', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN).toBeDefined()
      expect(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN).toEqual('m_accountSetUserSignedIn')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN]).toEqual(accountSetUserSignedIn)
    })
  })

  describe('accountSetRegisterModel', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL).toBeDefined()
      expect(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL).toEqual('m_accountSetRegisterModel')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ACCOUNT_SET_REGISTER_MODEL]).toEqual(accountSetRegisterModel)
    })
  })

  describe('accountSetLoginModel', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ACCOUNT_SET_LOGIN_MODEL).toBeDefined()
      expect(MUTATIONS.ACCOUNT_SET_LOGIN_MODEL).toEqual('m_accountSetLoginModel')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ACCOUNT_SET_LOGIN_MODEL]).toEqual(accountSetLoginModel)
    })
  })

  describe('accountSetLoginResult', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ACCOUNT_SET_LOGIN_RESULT).toBeDefined()
      expect(MUTATIONS.ACCOUNT_SET_LOGIN_RESULT).toEqual('m_accountSetLoginResult')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ACCOUNT_SET_LOGIN_RESULT]).toEqual(accountSetLoginResult)
    })
  })

  describe('administrateAddYear', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ADMINISTRATE_ADD_YEAR).toBeDefined()
      expect(MUTATIONS.ADMINISTRATE_ADD_YEAR).toEqual('m_administrateAddYear')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ADMINISTRATE_ADD_YEAR]).toEqual(administrateAddYear)
    })
  })

  describe('administrateRemoveYear', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ADMINISTRATE_REMOVE_YEAR).toBeDefined()
      expect(MUTATIONS.ADMINISTRATE_REMOVE_YEAR).toEqual('m_administrateRemoveYear')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ADMINISTRATE_REMOVE_YEAR]).toEqual(administrateRemoveYear)
    })
  })

  describe('administrateError', () => {
    it('should be defined by mutation string', () => {
      expect(MUTATIONS.ADMINISTRATE_ERROR).toBeDefined()
      expect(MUTATIONS.ADMINISTRATE_ERROR).toEqual('m_administrateError')
    })

    it('should be a resolvable mutation', () => {
      expect(mutations[MUTATIONS.ADMINISTRATE_ERROR]).toEqual(administrateError)
    })
  })
})

jest.mock('@/store/mutations/orientation', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/scroll', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setData', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setYears', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setRatings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setActiveYear', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/setAuthSettings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/accountSetUserSignedIn', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/accountSetRegisterModel', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/accountSetLoginModel', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/accountSetLoginResult', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/administrateAddYear', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/administrateRemoveYear', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/mutations/administrateError', () => jest.fn().mockImplementation(() => ({})))
