import store from '@/store/store'

describe('store', () => {
  it('should initialize state', () => {
    let expected = {
      orientation: 'portrait',
      scroll: 0,
      model: [],
      years: [],
      activeYear: -1
    }

    expect(store.state).toEqual(expected)
  })
})
