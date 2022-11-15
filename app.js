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

// leerExcel('./data.xlsx')
// obtenerGenero('Gian')
crearArchivo([1,2,3,4,5,6,7,8,9,10,11,12].slice(0,10))