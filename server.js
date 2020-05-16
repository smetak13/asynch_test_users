const express = require('express')
const app = express()

const users = [
  {id:1, name: 'Jan', pet: 'cat'},
  {id:2, name: 'Lucka', pet: 'parrot'},
  {id:3, name: 'Evžen', pet: ''},
  {id:4, name: 'Arnošt', pet: 'dog'},
  {id:5, name: 'Jana', pet: 'rabbit'},
]

app.use('/', express.static('public'))

app.get('/api/users', (req, res) => {
  res.send(users)
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})