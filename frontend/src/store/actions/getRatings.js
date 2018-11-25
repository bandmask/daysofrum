import getDataService from '@/logic/get/data'

import { MUTATIONS } from '@/store/mutations'

export default async (context, payload) => {
  let ratings = await getDataService.getRatings(payload)

  context.commit(MUTATIONS.SET_RATINGS, { year: payload, ratings: ratings })
}
