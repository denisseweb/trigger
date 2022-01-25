const mongoose = require('mongoose')

const DB = 'cementerio'
const USER = 'denisse'
const PASSWORD = 'ruYISOf9dR'
const CLUSTER = 'cluster0.yhuoz.mongodb.net'

const MONGO = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${DB}?retryWrites=true&w=majority`

const conexionMongo = async () => {
  await mongoose.connect(MONGO, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(()=>{
      console.log(`Conectado a la base de datos: ${DB}`)
    })
    .catch(err =>{
      console.error(err)
    })
}

module.exports = { conexionMongo }