import mutation from '@/store/mutations/setData'

describe('setData', () => {
  let state = {
    ratings: [{ some: 'first rating' }]
  }

  let payload = [{ some: 'payload rating' }]

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state ratings to payload', () => {
    expect(state.ratings).toBe(payload)
  })
})
