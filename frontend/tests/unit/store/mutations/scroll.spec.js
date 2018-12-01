import mutation from '@/store/mutations/scroll'

describe('scroll', () => {
  let state = {
    scroll: { some: 'sroll' }
  }

  let payload = { some: 'payload' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state scroll to payload', () => {
    expect(state.scroll).toBe(payload)
  })
})
