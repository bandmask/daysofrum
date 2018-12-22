// const apiUri = 'http://localhost:49260/api'
const apiUri = 'https://daysofrum.ropr.se/api'

const getData = () => {
  let uri = `${apiUri}/data`

  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(data => data.result)
    .catch(ex => {
      console.log('%cfetch error: getData', 'color: red', ex)
    })
}

const getYears = () => {
  let uri = `${apiUri}/years`

  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(data => data.result)
    .catch(ex => {
      console.log('%cfetch error: getYears', 'color: red', ex)
    })
}

const getRatings = year => {
  let uri = `${apiUri}/ratings/${year}`

  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(data => data.result)
    .catch(ex => {
      console.log('%cfetch error getRatings: ', 'color: red', ex)
    })
}

const getAuthSettings = () => {
  let uri = `${apiUri}/auth/options`

  return fetch(uri, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(data => data.result)
    .catch(ex => {
      console.log('%cfetch error getAuthSettings: ', 'color: red', ex)
    })
}

export default {
  getData: getData,
  getYears: getYears,
  getRatings: getRatings,
  getAuthSettings: getAuthSettings
}
