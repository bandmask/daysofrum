import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

export default (context, payload) => {
  if (context.state.activeYear !== payload) {
    context.commit(MUTATIONS.SET_ACTIVE_YEAR, payload)
  }

  if (context.state.model.filter(rating => rating.year === payload.year).length === 0) {
    context.dispatch(ACTIONS.GET_RATINGS, payload.year)
  }
}
