const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/db_buku',{
    
})

const db = mongoose.connection
db.on('open',()=>{
    console.log('Koneksi Data Berhasil');
})