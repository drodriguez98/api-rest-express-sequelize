import app from './app.js'
import { sequelize } from './database/database.js'

import './models/Project.js'
import './models/Task.js'

async function main() {

    try {

        //await sequelize.authenticate()
        //console.log('Connection has been established successfully.')

        await sequelize.sync({ force: false }) // crear tablas de los modelos si no existen (force: true para crearlas aunque ya existan)

        app.listen(3000)
        console.log('Server listening on port 3000')

    }    catch (error) { console.error('Unable to connect to the database:', error) }

}

main();