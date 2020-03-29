import {
  Request,
  Response,
} from 'express'

// init project
import express from 'express'

const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors')
app.use(cors({optionSuccessStatus: 200}))  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (_: Request, res: Response) {
  res.sendFile(__dirname + '/views/index.html')
})


// your first API endpoint... 
app.get("/api/whoami", (req: Request, res: Response) => {
  const headers = req.headers
  const software = headers['user-agent']  || ""
  const language = headers['accept-language'] || ""
  const ipaddress = headers['host'] || ""


  res.json({ ipaddress, language, software })
})


const port = process.env.PORT || 3000

// listen for requests :)
const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
