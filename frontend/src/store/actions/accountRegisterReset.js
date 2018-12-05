import { MUTATIONS } from '@/store/mutations'
export default context => {
  context.commit(MUTATIONS.ACCOUNT_SET_REGISTER_MODEL, { result: { hasResult: false } })
}
