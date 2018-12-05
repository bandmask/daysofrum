import auth from '@/logic/auth/auth'

import { MUTATIONS } from '@/store/mutations'

export default context => {
  auth.logout()
  context.commit(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN, false)
}
