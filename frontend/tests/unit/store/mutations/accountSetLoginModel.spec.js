import mutation from '@/store/mutations/accountSetLoginModel'

describe('accountSetLoginModel', () => {
  let payload = { other: 'model' }

  let state = {
    account: {
      user: { some: 'model' }
    }
  }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state account user to payload', () => {
    expect(state.account.user).toEqual(payload)
  })
})
