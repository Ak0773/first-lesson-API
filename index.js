const app = require('express')()
const port = 4400

// get geting data
// post building data
// put updating data
// delete deleting data

app.listen(port, () =>
	console.log(`API is running at http://localhost:${port}`)
)

app.get('/', (req, res) => {
	res.send('Welcome to the API!')
})

app.get('/post/data', (req, res) => {
	res.send('Data has been created!')
})

app.get('/put/data', (req, res) => {
	res.send('Data has been updated!')
})

app.get('/delete/data', (req, res) => {
	res.send('Data has been deleted!')
})
