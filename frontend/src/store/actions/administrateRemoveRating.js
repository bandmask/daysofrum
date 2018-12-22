import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  try {
    let result = await postDataService.deleteRating(payload.year, payload.day)
    if (result) {
      context.commit(MUTATIONS.ADMINISTRATE_REMOVE_RATING, payload)
    } else {
      throw new Error({ message: 'delete failed' })
    }
  } catch (exception) {
    context.commit(MUTATIONS.ADMINISTRATE_ERROR, exception)
  }
}
