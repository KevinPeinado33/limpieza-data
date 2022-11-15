const axios  = require('axios')
const detect = require('detect-gender')

const generos = {
    female: 'Femenino',
    male:   'Masculino'
}

const calcularGenero = async nombre => {

    try {

        const response = await axios.get(`https://genderapi.io/api?name=${ nombre }`)
        const sexo     = response.data.gender
    
        return generos[ sexo ]

    } catch( error ) {

        console.log({ error })
        
    }

}

const obtenerGenero = async nombre => {

    const sexo = await detect( nombre )

    console.log({ sexo })

}

module.exports = { calcularGenero, obtenerGenero }