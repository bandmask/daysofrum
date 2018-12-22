import postDataService from '@/logic/post/data'

import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  try {
    let ratingModel = Object.assign({}, payload.rating, { year: payload.year })
    if (await postDataService.postRating(ratingModel) && await postDataService.postImage(payload.year, payload.rating.day, payload.image)) {
      context.commit(MUTATIONS.ADMINISTRATE_ADD_RATING, Object.assign({}, ratingModel, { image: payload.image }))
    } else {
      throw new Error({ message: 'update failed' })
    }
  } catch (exception) {
    context.commit(MUTATIONS.ADMINISTRATE_ERROR, exception)
  }
}
