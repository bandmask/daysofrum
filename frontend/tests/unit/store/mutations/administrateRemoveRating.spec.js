import mutation from '@/store/mutations/administrateRemoveRating'

describe('administrateRemoveRating', () => {
  let state
  let payload

  describe('when rating exists', () => {
    beforeEach(() => {
      state = {
        ratings: [{
          year: 2018,
          day: 1,
          some: 'rating'
        }, {
          year: 2018,
          day: 2,
          some: 'rating'
        }, {
          year: 2017,
          day: 3,
          some: 'rating'
        }]
      }

      payload = {
        year: 2018,
        day: 2
      }

      mutation(state, payload)
    })

    it('should remove rating', () => {
      expect(state.ratings).toEqual([{
        year: 2018,
        day: 1,
        some: 'rating'
      }, {
        year: 2017,
        day: 3,
        some: 'rating'
      }])
    })
  })

  describe('when rating NOT exists', () => {
    beforeEach(() => {
      state = {
        ratings: [{
          year: 2018,
          day: 1,
          some: 'rating'
        }, {
          year: 2017,
          day: 3,
          some: 'rating'
        }]
      }

      payload = {
        year: 2018,
        day: 2
      }

      mutation(state, payload)
    })

    it('should remove rating', () => {
      expect(state.ratings).toEqual([{
        year: 2018,
        day: 1,
        some: 'rating'
      }, {
        year: 2017,
        day: 3,
        some: 'rating'
      }])
    })
  })
})
