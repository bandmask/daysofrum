import getDataService from '@/logic/get/data'

import { MUTATIONS } from '@/store/mutations'

export default async context => {
  if (context.state.authSettings) return

  let result = await getDataService.getAuthSettings()
  if (result) {
    context.commit(MUTATIONS.SET_AUTH_SETTINGS, result)
  }
}
