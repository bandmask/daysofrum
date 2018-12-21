import getYears from '@/store/actions/getYears'
import getRatings from '@/store/actions/getRatings'
import setActiveYear from '@/store/actions/setActiveYear'
import uploadFile from '@/store/actions/uploadFile'
import getAuthSettings from '@/store/actions/getAuthSettings'
import accountInit from '@/store/actions/accountInit'
import accountRegister from '@/store/actions/accountRegister'
import accountRegisterReset from '@/store/actions/accountRegisterReset'
import accountLogin from '@/store/actions/accountLogin'
import accountLogout from '@/store/actions/accountLogout'
import accountLoginReset from '@/store/actions/accountLoginReset'
import administrateAddYear from '@/store/actions/administrateAddYear'
import administrateRemoveYear from '@/store/actions/administrateRemoveYear'

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

  describe('uploadFile', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.UPLOAD_FILE).toBeDefined()
      expect(ACTIONS.UPLOAD_FILE).toEqual('a_uploadFile')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.UPLOAD_FILE]).toEqual(uploadFile)
    })
  })

  describe('getAuthSettings', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.GET_AUTH_SETTINGS).toBeDefined()
      expect(ACTIONS.GET_AUTH_SETTINGS).toEqual('a_getAuthSettings')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.GET_AUTH_SETTINGS]).toEqual(getAuthSettings)
    })
  })

  describe('accountInit', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_INIT).toBeDefined()
      expect(ACTIONS.ACCOUNT_INIT).toEqual('a_accountInit')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_INIT]).toEqual(accountInit)
    })
  })

  describe('accountRegister', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_REGISTER).toBeDefined()
      expect(ACTIONS.ACCOUNT_REGISTER).toEqual('a_accountRegister')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_REGISTER]).toEqual(accountRegister)
    })
  })

  describe('accountRegisterReset', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_REGISTER_RESET).toBeDefined()
      expect(ACTIONS.ACCOUNT_REGISTER_RESET).toEqual('a_accountRegisterReset')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_REGISTER_RESET]).toEqual(accountRegisterReset)
    })
  })

  describe('accountLogin', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_LOGIN).toBeDefined()
      expect(ACTIONS.ACCOUNT_LOGIN).toEqual('a_accountLogin')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_LOGIN]).toEqual(accountLogin)
    })
  })

  describe('accountLogout', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_LOGOUT).toBeDefined()
      expect(ACTIONS.ACCOUNT_LOGOUT).toEqual('a_accountLogout')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_LOGOUT]).toEqual(accountLogout)
    })
  })

  describe('accountLoginReset', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ACCOUNT_LOGIN_RESET).toBeDefined()
      expect(ACTIONS.ACCOUNT_LOGIN_RESET).toEqual('a_accountLoginReset')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ACCOUNT_LOGIN_RESET]).toEqual(accountLoginReset)
    })
  })

  describe('administrateAddYear', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ADMINISTRATE_ADD_YEAR).toBeDefined()
      expect(ACTIONS.ADMINISTRATE_ADD_YEAR).toEqual('a_administrateAddYear')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ADMINISTRATE_ADD_YEAR]).toEqual(administrateAddYear)
    })
  })

  describe('administrateRemoveYear', () => {
    it('should be defined by action string', () => {
      expect(ACTIONS.ADMINISTRATE_REMOVE_YEAR).toBeDefined()
      expect(ACTIONS.ADMINISTRATE_REMOVE_YEAR).toEqual('a_administrateRemoveYear')
    })

    it('should be a resolvable action', () => {
      expect(actions[ACTIONS.ADMINISTRATE_REMOVE_YEAR]).toEqual(administrateRemoveYear)
    })
  })
})

jest.mock('@/store/actions/getYears', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/getRatings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/setActiveYear', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/uploadFile', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/getAuthSettings', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountInit', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountRegister', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountRegisterReset', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountLogin', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountLogout', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/accountLoginReset', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/administrateAddYear', () => jest.fn().mockImplementation(() => ({})))
jest.mock('@/store/actions/administrateRemoveYear', () => jest.fn().mockImplementation(() => ({})))
