import action from '@/store/actions/accountInit'

import { MUTATIONS } from '@/store/mutations'

import token from '@/logic/auth/token'

describe('accountInit', () => {
  let context = {
    commit: jest.fn()
  }

  beforeEach(async () => {
    await action(context)
  })

  afterEach(() => {
    context.commit.mockClear()
    token.hasToken.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call commit with mutation ACCOUNT_SET_USER_SIGNED_IN', () => {
    expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN, true)
  })
})

jest.mock('@/logic/auth/token', () => ({
  hasToken: jest.fn().mockImplementation(() => true)
}))
