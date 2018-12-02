// const apiUri = 'http://localhost:49260/api'
const apiUri = 'https://daysofrum.ropr.se/api'

const postImage = (imageModel) => {
  var uri = `${apiUri}/images/${imageModel.year}/${imageModel.day}`

  let formData = new FormData()
  formData.append('rumImage', imageModel.file)

  return fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  })
    .then(resp => resp.json())
    .then(data => data)
    .catch(ex => {
      console.log('%cfetch error: ', 'color: red', ex)
    })
}

export default {
  postImage: postImage
}
