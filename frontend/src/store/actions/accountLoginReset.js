import { MUTATIONS } from '@/store/mutations'

export default context => {
  context.commit(MUTATIONS.ACCOUNT_SET_LOGIN_MODEL, { signedIn: false, result: { hasResult: false } })
}
