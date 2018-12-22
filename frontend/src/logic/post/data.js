import tokenHandler from '@/logic/auth/token'

// const apiUri = 'http://localhost:49260/api'
const apiUri = 'https://daysofrum.ropr.se/api'

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

const postRating = ratingModel => {
  var uri = `${apiUri}/ratings`
  let token = tokenHandler.getToken()

  return fetch(uri, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ratingModel)
  })
    .then(resp => resp.json())
    .then(data => data.success)
    .catch(ex => {
      console.log('%cfetch error: postYear: ', 'color: red', ex)
    })
}

const deleteRating = (year, day) => {
  var uri = `${apiUri}/ratings/${year}/${day}`
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

const postImage = (year, day, image) => {
  var uri = `${apiUri}/images/${year}/${day}`
  let token = tokenHandler.getToken()

  let formData = new FormData()
  formData.append('rumImage', image)

  return fetch(uri, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
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

export default {
  postYear: postYear,
  deleteYear: deleteYear,
  postRating: postRating,
  deleteRating: deleteRating,
  postImage: postImage
}
