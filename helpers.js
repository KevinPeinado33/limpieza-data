const fs = require('fs')

const primerNombre = nombreCompleto => nombreCompleto.split(' ')[ 0 ]

const crearArchivo = ( contenido ) => {

    contenido.map( item => {  

        console.log(item)
        fs.appendFile('./sexos.txt', `${item}\n`, (error) => {
            if ( error ) throw error
            console.log('Se escribió!!')
        })
    })

}

module.exports = { primerNombre, crearArchivo }