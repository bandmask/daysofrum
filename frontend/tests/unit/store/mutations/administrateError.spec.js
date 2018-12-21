import mutation from '@/store/mutations/administrateError'

describe('administrateError', () => {
  let state

  let payload = { some: 'error' }

  beforeEach(() => {
    state = {
      administrationError: null
    }

    mutation(state, payload)
  })

  it('should set state administrationError to payload', () => {
    expect(state.administrationError).toBe(payload)
  })
})
