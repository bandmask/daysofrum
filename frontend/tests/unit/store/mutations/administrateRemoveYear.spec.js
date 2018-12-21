import mutation from '@/store/mutations/administrateRemoveYear'

describe('administrateRemoveYear', () => {
  let state
  let payload

  describe('when year exists', () => {
    beforeEach(() => {
      state = {
        years: [{
          year: 2017,
          description: 'some 2017 description'
        }, {
          year: 2018,
          description: 'some 2018 description'
        }]
      }

      payload = 2018

      mutation(state, payload)
    })

    it('should remove year', () => {
      expect(state.years.length).toBe(1)
      expect(state.years).toEqual([{
        year: 2017,
        description: 'some 2017 description'
      }])
    })
  })

  describe('when year NOT exists', () => {
    beforeEach(() => {
      state = {
        years: [{
          year: 2017,
          description: 'some 2017 description'
        }]
      }

      payload = 2018

      mutation(state, payload)
    })

    it('should NOT remove year', () => {
      expect(state.years.length).toBe(1)
      expect(state.years).toEqual([{
        year: 2017,
        description: 'some 2017 description'
      }])
    })
  })
})
