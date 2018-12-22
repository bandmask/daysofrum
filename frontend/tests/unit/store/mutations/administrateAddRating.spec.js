import mutation from '@/store/mutations/administrateAddRating'

describe('administrateAddRating', () => {
  let state = {
    ratings: []
  }

  let payload = { some: 'rating' }

  beforeEach(() => {
    mutation(state, payload)
  })

  it('should add payload to state ratings', () => {
    expect(state.ratings).toEqual([payload])
  })
})
