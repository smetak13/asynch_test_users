const init = async () => {
  console.log('javascript initialized')

  // PROMISES

  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(data => {
  //   for(let i = 0; i < data.length; i++) {
  //     const line = data[i]
  //   }
  // })

  // ASYNC/ AWAIT

  const response = await fetch('http://localhost:5000/api/users')
  const data = await response.json()
  
  data.forEach(line => {
    console.log(line)
  })
  console.log(data)

}

document.addEventListener('DOMContentLoaded', init)