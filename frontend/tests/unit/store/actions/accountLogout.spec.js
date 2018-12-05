import action from '@/store/actions/accountLogout'
import auth from '@/logic/auth/auth'

import { MUTATIONS } from '@/store/mutations'

describe('accountLogout', () => {
  let context = {
    commit: jest.fn()
  }

  beforeEach(async () => {
    await action(context)
  })

  afterEach(() => {
    context.commit.mockClear()
    auth.logout.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call auth logout', () => {
    expect(auth.logout).toHaveBeenCalledTimes(1)
  })

  it('should call commit with mutation ACCOUNT_SET_USER_SIGNED_IN and false', () => {
    expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN, false)
  })
})

jest.mock('@/logic/auth/auth', () => ({
  logout: jest.fn()
}))
