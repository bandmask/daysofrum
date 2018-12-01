import mutation from '@/store/mutations/orientation'

describe('orientation', () => {
  let state = {
    orientation: { some: 'orientation' }
  }

  let payload = { some: 'payload' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state orientation to payload', () => {
    expect(state.orientation).toBe(payload)
  })
})
