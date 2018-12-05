import action from '@/store/actions/accountLogin'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

import auth from '@/logic/auth/auth'

describe('accountLogin', () => {
  let payload = { account: 'login' }

  let context = {
    state: {
    },
    commit: jest.fn(),
    dispatch: jest.fn()
  }

  afterEach(() => {
    context.commit.mockClear()
    context.dispatch.mockClear()
    auth.login.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when authSettings exist', () => {
    let _context

    beforeEach(async () => {
      _context = Object.assign({}, context, {
        state: {
          authSettings: { auth: 'settings' }
        }
      })

      await action(_context, payload)
    })

    it('should call auth login with authSettings and loginModel', () => {
      expect(auth.login).toHaveBeenCalledWith(_context.state.authSettings, payload)
    })
  })

  describe('when authSettings NOT exist', () => {
    beforeEach(async () => {
      await action(context, payload)
    })

    it('should NOT call auth login', () => {
      expect(auth.login).not.toHaveBeenCalled()
    })

    it('should NOT call dispatch', () => {
      expect(context.dispatch).not.toHaveBeenCalled()
    })
  })

  describe('when login is successful', () => {
    let _context

    beforeEach(async () => {
      _context = Object.assign({}, context, {
        state: {
          authSettings: { auth: 'settings' }
        }
      })

      await action(_context, payload)
    })

    it('should call dispatch with action ACCOUNT_INIT', () => {
      expect(_context.dispatch).toHaveBeenCalledWith(ACTIONS.ACCOUNT_INIT)
    })

    it('should commit with mutation ACCOUNT_SET_LOGIN_RESULT with successful result', () => {
      expect(_context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_LOGIN_RESULT, { hasResult: true, result: true })
    })
  })

  describe('when login is NOT successful', () => {
    let _context

    beforeEach(async () => {
      _context = Object.assign({}, context, {
        state: {
          authSettings: { auth: 'settings' }
        }
      })
      auth.login.mockImplementationOnce(async () => Promise.resolve({ success: false }))
      await action(_context, payload)
    })

    it('should NOT call dispatch', () => {
      expect(_context.dispatch).not.toHaveBeenCalled()
    })

    it('should call commit with ACCOUNT_SET_LOGIN_RESULT and negative result', () => {
      expect(_context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_LOGIN_RESULT, { hasResult: true, result: false })
    })
  })
})

jest.mock('@/logic/auth/auth', () => ({
  login: jest.fn().mockImplementation(async () => Promise.resolve({ success: true }))
}))
