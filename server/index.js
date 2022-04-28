const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
    rollbar.info('file served')
})

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
    rollbar.info('css file served')
})

app.use(express.static(path.join(__dirname, "../")));

const Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '37a8f6b12b17472aa6ad1a272c660484',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('MusicalApplicate Rollbar!')

const submitButton = document.getElementById('submit')
submitButton.addEventListener('submit', () => {
    rollbar.warning(`Hey! That's not allowed`, error)
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.critical(`critical error`, error)
    // rollbar.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }