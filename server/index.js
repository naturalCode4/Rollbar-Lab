const express = require('express')
const path = require('path')


const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '37a8f6b12b17472aa6ad1a272c660484',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('MusicalApplicate Rollbar!')

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))