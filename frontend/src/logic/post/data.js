import tokenHandler from '@/logic/auth/token'

// const apiUri = 'https://daysofrum.ropr.se/api'
const apiUri = 'http://localhost:49260/api'

const postYear = yearModel => {
  var uri = `${apiUri}/years`
  let token = tokenHandler.getToken()

  return fetch(uri, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(yearModel)
  })
    .then(resp => resp.json())
    .then(data => data.success)
    .catch(ex => {
      console.log('%cfetch error: postYear: ', 'color: red', ex)
    })
}

const postImage = imageModel => {
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
      console.log('%cfetch error: postImag:  ', 'color: red', ex)
    })
}

const deleteYear = year => {
  var uri = `${apiUri}/years/${year}`
  let token = tokenHandler.getToken()

  return fetch(uri, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(data => data.success)
    .catch(ex => {
      console.log('%cfetch error: postYear: ', 'color: red', ex)
    })
}

export default {
  postImage: postImage,
  postYear: postYear,
  deleteYear: deleteYear
}
