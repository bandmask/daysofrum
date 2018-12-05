import action from '@/store/actions/accountRegister'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

import auth from '@/logic/auth/auth'

describe('accountRegister', () => {
  let payload = { account: 'register' }

  let context = {
    state: {
    },
    commit: jest.fn(),
    dispatch: jest.fn()
  }

  afterEach(() => {
    context.commit.mockClear()
    context.dispatch.mockClear()
    auth.register.mockClear()
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

    it('should call auth register with authSettings and registerModel', () => {
      expect(auth.register).toHaveBeenCalledWith(_context.state.authSettings, payload)
    })
  })

  describe('when authSettings NOT exist', () => {
    beforeEach(async () => {
      await action(context, payload)
    })

    it('should NOT call auth register', () => {
      expect(auth.register).not.toHaveBeenCalled()
    })

    it('should NOT call dispatch', () => {
      expect(context.dispatch).not.toHaveBeenCalled()
    })
  })

  describe('when registering is successful', () => {
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

    it('should commit with ACCOUNT_SET_REGISTER_MODEL with successful result', () => {
      expect(_context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL, { result: { hasResult: true, result: true } })
    })
  })

  describe('when registering is NOT successful', () => {
    let _context

    beforeEach(async () => {
      _context = Object.assign({}, context, {
        state: {
          authSettings: { auth: 'settings' }
        }
      })
      auth.register.mockImplementationOnce(async () => Promise.resolve({ success: false }))
      await action(_context, payload)
    })

    it('should NOT call dispatch', () => {
      expect(_context.dispatch).not.toHaveBeenCalled()
    })

    it('should call commit with ACCOUNT_SET_REGISTER_MODEL and negative result', () => {
      expect(_context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL, { result: { hasResult: true, result: false } })
    })
  })
})

jest.mock('@/logic/auth/auth', () => ({
  register: jest.fn().mockImplementation(async () => Promise.resolve({ success: true }))
}))
