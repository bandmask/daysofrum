import mutation from '@/store/mutations/accountSetRegisterModel'

describe('accountSetRegisterModel', () => {
  let payload = { other: 'model' }

  let state = {
    account: {
      register: { some: 'model' }
    }
  }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state account register to payload', () => {
    expect(state.account.register).toEqual(payload)
  })
})
