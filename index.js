const app = require('./app')
const port = process.env.port || 5000
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGOOSE_CONNECT_INFO,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})


app.listen(port, () => {
  console.log(`Server has been started on port: ${port}`)
})