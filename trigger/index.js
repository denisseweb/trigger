const { Tramite } = require('../modelos')

const chalk = require('chalk')
const log = console.log;

const trigger = async (tramite) => {
  try {

    const { tramite_cantidad } = tramite
    
    if(tramite_cantidad > 3){
      throw '¡El encargado ya tiene 3 inhumaciones!'
    } else {
      const insertarTramite = new Tramite(tramite)
      await insertarTramite.save()
      log(chalk.blueBright('¡Trámite creado correctamente!'))
      process.exit()
    }

  } catch (error) {
    log(chalk.blueBright(error)) 
    process.exit()
  }
}

module.exports = { trigger }