import postDataService from '@/logic/post/data'

export default async (context, payload) => {
  var result = await postDataService.postImage(payload)
  console.log(result)
}
