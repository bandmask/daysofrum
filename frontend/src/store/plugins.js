import { MUTATIONS } from '@/store/mutations'

const blockedMutations = [MUTATIONS.SCROLL]

const getPlugins = store => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  store.subscribe(mutation => {
    if (blockedMutations.indexOf(mutation.type) === -1) {
      console.log(`%cmutation: ${mutation.type}`, 'color: green;', mutation.payload)
    }
  })

  store.subscribeAction(action => {
    console.log(`%caction: ${action.type}`, 'color: blue;', action.payload)
  })
}

export default getPlugins
