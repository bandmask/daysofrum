import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  try {
    let result = await postDataService.deleteYear(payload)
    if (result) {
      context.commit(MUTATIONS.ADMINISTRATE_REMOVE_YEAR, payload)
    } else {
      throw new Error({ message: 'delete failed' })
    }
  } catch (exception) {
    context.commit(MUTATIONS.ADMINISTRATE_ERROR, exception)
  }
}
