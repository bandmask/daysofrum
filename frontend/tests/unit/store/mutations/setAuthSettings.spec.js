import mutation from '@/store/mutations/setAuthSettings'

describe('setAuthSettings', () => {
  let state = {
    authSettings: null
  }

  let payload = { some: 'payload' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state authSettings to payload', () => {
    expect(state.authSettings).toBe(payload)
  })
})
