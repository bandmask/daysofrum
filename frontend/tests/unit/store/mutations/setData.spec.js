import mutation from '@/store/mutations/setData'

describe('setData', () => {
  let state = {
    model: [{ some: 'first model' }]
  }

  let payload = [{ some: 'payload model' }]

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should set state model to payload', () => {
    expect(state.model).toBe(payload)
  })
})
