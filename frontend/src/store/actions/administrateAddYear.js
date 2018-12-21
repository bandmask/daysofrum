import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  try {
    let result = await postDataService.postYear(payload)

    if (result) {
      context.commit(MUTATIONS.ADMINISTRATE_ADD_YEAR, payload)
    } else {
      throw new Error({ message: 'update failed' })
    }
  } catch (exception) {
    context.commit(MUTATIONS.ADMINISTRATE_ERROR, exception)
  }
}
