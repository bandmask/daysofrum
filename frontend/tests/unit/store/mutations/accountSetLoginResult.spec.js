import mutation from '@/store/mutations/accountSetLoginResult'

describe('accountSetLoginModel', () => {
  let payload = { other: 'model' }

  let state = {
    account: {
      user: { result: { some: 'model' } }
    }
  }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state account user to payload', () => {
    expect(state.account.user.result).toEqual(payload)
  })
})
