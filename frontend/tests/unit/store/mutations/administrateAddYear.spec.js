import mutation from '@/store/mutations/administrateAddYear'

describe('administrateAddYear', () => {
  let state

  let newYear = { year: 2018, description: 'some 2018 description' }

  beforeEach(() => {
    state = {
      years: []
    }

    mutation(state, newYear)
  })

  it('should add payload to state years', () => {
    expect(state.years).toEqual([newYear])
  })
})
