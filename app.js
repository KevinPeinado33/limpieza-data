const xlsx                   = require('xlsx')

const { primerNombre, esperar }       = require('./helpers')
const { postCalcularGenero } = require('./service')

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

    results = results.slice(1000, 3000)

    
    results.map( async item => {
        
        
        const nombre = primerNombre( item.ESTUDIANTE )
        
        await esperar( 5 )

        const result = await postCalcularGenero( nombre )
        
        console.log( result )
        
    })
       
}

leerExcel('./data.xlsx')