import store from '@/store/store'

describe('store', () => {
  it('should initialize state', () => {
    let expected = {
      orientation: 'portrait',
      scroll: 0,
      ratings: [],
      years: [],
      activeYear: -1,
      authSettings: null,
      account: {
        user: {
          signedIn: false,
          result: { hasResult: false }
        },
        register: {
          result: { hasResult: false }
        }
      },
      administrationError: null
    }

    expect(store.state).toEqual(expected)
  })
})
