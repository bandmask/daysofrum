import mutation from '@/store/mutations/setRatings'

describe('setRatings', () => {
  describe('when no model exists', () => {
    let state = {
      ratings: []
    }

    let payload = { year: 2017, ratings: [{ some: 'payload model', year: 2017 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should set state ratings to payload', () => {
      expect(state.ratings).toEqual(payload.ratings)
    })
  })

  describe('when models with different year exists', () => {
    let originalRatings = [{
      year: 2018,
      some: 'stateModel'
    }]

    let state = {
      ratings: originalRatings
    }

    let payload = { year: 2017, ratings: [{ some: 'payload model', year: 2017 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should concatenate ratings to model', () => {
      expect(state.ratings).toEqual([].concat(originalRatings, payload.ratings))
    })
  })

  describe('when models with same year exists', () => {
    let originalRatings = [{
      year: 2018,
      some: 'stateModel'
    }]

    let state = {
      ratings: originalRatings
    }

    let payload = { year: 2018, ratings: [{ some: 'payload model', year: 2018 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should filter ratings from same year and replace with payload ratings', () => {
      expect(state.ratings).toEqual([].concat(payload.ratings))
    })
  })
})
