import mutation from '@/store/mutations/accountSetUserSignedIn'

describe('accountSetUserSignedIn', () => {
  let state = {
    account: {
      user: {}
    }
  }

  let payload = true

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state user userSignedIn to payload', () => {
    expect(state.account.user.signedIn).toBe(payload)
  })
})
