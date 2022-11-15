const axios = require('axios')

const generos = {
    female: 'Femenino',
    male:   'Masculino'
}

const calcularGenero = async nombre => {

    try {

        const response = await axios.get(`https://gender-api.com/get?name=${ nombre }&country=PE&key=c3fnYolW3lKtsdAsMHj5dlnRg8jjcVXLtNl9`)
        const sexo     = response.data.gender
    
        return generos[ sexo ]

    } catch( error ) {

        console.log({ error })
    }
 
   
}

module.exports = { calcularGenero }