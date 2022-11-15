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

    results.forEach( item => console.log( item.NOMBRE_ESCUELA ) )

    // meter logica para leer todos los nombres

}



const prueba = ['Kevin Raul Peinado Leiva', 'Francelys Lazaro', 'Maria Juana Del carpio', 'Mario Llori', 'Jose Marcos']

prueba.forEach( async nombres => {

    const nombre = primerNombre( nombres )

    const result = await calcularGenero( nombre )

    console.log({ nombres, result })

})