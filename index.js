const { conexionMongo } = require('./db')
const { trigger } = require('./trigger')

const tramite = {
  tramite_id: 1,
  personal_id: 2,
  boveda_id: 5,
  propietario_id: 3,
  tramite_fecha: new Date(2022, 01, 18),
  tramite_tipo: 'Inhumación',
  tramite_cantidad: 2
}

async function ejecutarTrigger(){

  // Conexión Mongo
  await conexionMongo()

  // Ejecutar trigger
  trigger(tramite)
}

ejecutarTrigger()