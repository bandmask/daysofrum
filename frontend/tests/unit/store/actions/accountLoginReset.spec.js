import action from '@/store/actions/accountLoginReset'

import { MUTATIONS } from '@/store/mutations'

describe('accountLoginReset', () => {
  let context = {
    commit: jest.fn()
  }

  beforeEach(async () => {
    await action(context)
  })

  afterEach(() => {
    context.commit.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should call commit with mutation ACCOUNT_SET_LOGIN_MODEL and empty object', () => {
    expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_LOGIN_MODEL, { signedIn: false, result: { hasResult: false } })
  })
})
