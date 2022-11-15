const xlsx               = require('xlsx')

const { primerNombre }   = require('./helpers')
const { calcularGenero } = require('./service')

const leerExcel = url => {
    
    const workbook       = xlsx.readFile( url )
    const workbookSheets = workbook.SheetNames
    const sheet          = workbookSheets[ 0 ]
    const dataExcel      = xlsx.utils.sheet_to_json( workbook.Sheets[ sheet ] )

    const hash           = { }

    const results = dataExcel.filter( current => {
        let exits = !hash[current.CODIGO]
        hash[current.CODIGO] = true
        return exits
    })

    results.forEach( async item => {
        
        const nombre = primerNombre( item.ESTUDIANTE )
        const result = await calcularGenero( nombre )

        console.log(result)

    })

}

leerExcel('./data.xlsx')