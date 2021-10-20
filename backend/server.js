const express = require('express')
const cors = require('cors')
const morgan =require('morgan')


require('./db.js')

const app = express()
const port = 4000
const RouteAkses = require('./routes')




app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/book',RouteAkses)


app.listen(port,()=>{
    console.log('Server Berhasil Di jalankan pada port : ' + port);
})