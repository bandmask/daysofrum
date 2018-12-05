import auth from '@/logic/auth/auth'

import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  let result = { success: false }
  let authSettings = context.state.authSettings

  if (authSettings) {
    result = await auth.register(authSettings, payload)

    if (result.success) {
      context.dispatch(ACTIONS.ACCOUNT_INIT)
    }
  }

  context.commit(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL, { result: { hasResult: true, result: result.success } })
}
