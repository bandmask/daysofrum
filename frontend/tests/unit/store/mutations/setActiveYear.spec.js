import mutation from '@/store/mutations/setActiveYear'

describe('activeYear', () => {
  let state = {
    activeYear: { some: 'activeYear' }
  }

  let payload = { some: 'payload' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state activeYear to payload', () => {
    expect(state.activeYear).toBe(payload)
  })
})
