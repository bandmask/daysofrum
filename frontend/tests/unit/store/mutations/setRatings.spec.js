import mutation from '@/store/mutations/setRatings'

describe('setRatings', () => {
  describe('when no model exists', () => {
    let state = {
      model: []
    }

    let payload = { year: 2017, ratings: [{ some: 'payload model', year: 2017 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should set state model to payload', () => {
      expect(state.model).toEqual(payload.ratings)
    })
  })

  describe('when models with different year exists', () => {
    let originalModel = [{
      year: 2018,
      some: 'stateModel'
    }]

    let state = {
      model: originalModel
    }

    let payload = { year: 2017, ratings: [{ some: 'payload model', year: 2017 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should concatenate ratings to model', () => {
      expect(state.model).toEqual([].concat(originalModel, payload.ratings))
    })
  })

  describe('when models with same year exists', () => {
    let originalModel = [{
      year: 2018,
      some: 'stateModel'
    }]

    let state = {
      model: originalModel
    }

    let payload = { year: 2018, ratings: [{ some: 'payload model', year: 2018 }] }

    beforeEach(() => {
      mutation(state, payload)
    })

    it('should filter ratings from same year and replace with payload ratings', () => {
      expect(state.model).toEqual([].concat(payload.ratings))
    })
  })
})
