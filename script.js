// The Code below generates the data about movies, actors and directors randomly.

const getData = (url) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText)
      console.log(data)
    }
  }

  setTimeout(xhr.send(), Math.floor(Math.random() * 4000) + 1)
}

getData('./movies.json')
getData('./actors.json')
getData('./directors.json')

// To make this code generate the data in the particular series -- Movies, Actors and Directors, through callbacks then we will do the following:

// 'cb' parameter stands for callback function
const getData2 = (url, cb) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText)
      cb(data)
    }
  }

  setTimeout(xhr.send(), Math.floor(Math.random() * 4000) + 1000)
}

getData2('./movies.json', (data) => {
  console.log(data)
  getData2('./actors.json', (data) => {
    console.log(data)
    getData2('./directors.json', (data) => {
      console.log(data)
    })
  })
})

// The above code will create a callback hell