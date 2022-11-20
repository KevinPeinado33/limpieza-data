const xlsx               = require('xlsx')

const { primerNombre, crearArchivo }    = require('./helpers')
const { calcularGenero, obtenerGenero } = require('./service')

const leerExcel = async url => {
    
    const workbook       = xlsx.readFile( url )
    const workbookSheets = workbook.SheetNames
    const sheet          = workbookSheets[ 0 ]
    const dataExcel      = xlsx.utils.sheet_to_json( workbook.Sheets[ sheet ] )

    const hash           = { }

    let results = dataExcel.filter( current => {
        let exits = !hash[current.CODIGO]
        hash[current.CODIGO] = true
        return exits
    })

    results = results.slice(0, 999)

    results.forEach( async item => {
            
        const nombre = primerNombre( item.ESTUDIANTE )
        const result = await calcularGenero( nombre )

        console.log( result )

    })

}