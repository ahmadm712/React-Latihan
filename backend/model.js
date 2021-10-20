const moongose = require('mongoose')
const Schema = moongose.Schema


const BookSchema = new Schema(
    {
        pengarang : {type:String,required:true},
        judul : {type:String,required:true},
        harga : {type:Number,required:true},
        stok : {type:Number,required:true},
    },

    {collection:'koleksiBuku'}

)


module.exports = moongose.model('BukuModel',BookSchema)