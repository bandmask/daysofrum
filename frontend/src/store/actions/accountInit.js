import { MUTATIONS } from '@/store/mutations'

import token from '@/logic/auth/token'

export default async context => {
  context.commit(MUTATIONS.ACCOUNT_SET_USER_SIGNED_IN, token.hasToken())
}
