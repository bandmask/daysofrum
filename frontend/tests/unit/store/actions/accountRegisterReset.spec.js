import action from '@/store/actions/accountRegisterReset'

import { MUTATIONS } from '@/store/mutations'

describe('accountRegisterReset', () => {
  let context = {
    state: {
      account: {
        register: { some: 'model' }
      }
    },
    commit: jest.fn()
  }

  afterEach(() => {
    context.commit.mockClear()
  })

  afterAll(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('when resetting register model', () => {
    beforeEach(async () => {
      await action(context)
    })

    it('should reset account register model', () => {
      expect(context.commit).toHaveBeenCalledWith(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL, { result: { hasResult: false } })
    })
  })
})
