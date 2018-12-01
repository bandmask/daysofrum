import mutation from '@/store/mutations/setYears'

describe('setYears', () => {
  let state = {
    years: { some: 'year' }
  }

  let payload = { some: 'payload' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state years to payload', () => {
    expect(state.years).toBe(payload)
  })
})
