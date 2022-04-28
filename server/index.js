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

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

  function getPastAppointments() {
    axios.get('http://localhost:8765/appt')
        .then(res => {
            for (let i = 0; i < res.data.length; i += 2) {
                const appt = res.data[i]
                const nextAppt = res.data[i + 1] || null
                const apptElem = makeApptCard(appt, nextAppt)
                pastAppts.innerHTML += apptElem    
            }
        })
        .catch(err => console.log(err))
}