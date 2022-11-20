const axios = require('axios')
const detect = require('detect-gender')

const generos = {
    female: 'Femenino',
    male: 'Masculino'
}

const calcularGenero = async nombre => {

    try {

        const response = await axios.get(`https://genderapi.io/api?name=${nombre}`)
        const sexo = response.data.gender

        return generos[sexo]

    } catch (error) {

        console.log({ error })

    }

}

const postCalcularGenero = async nombre => {

    const data = {
        personalNames: [
            {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": nombre,
                "lastName": ""
            }
        ]
    }

    const config = {
        headers: {
            'X-API-KEY': '56e724b131401a20980b46cfaf2e20de',
        }
    }

    try {
        const response = await axios
            .post('https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch', data, config)

        const sexo = response.data.personalNames[0].likelyGender

        return generos[sexo]

    } catch (error) {
        console.log({ error })
    }

}

const obtenerGenero = async nombre => {

    const sexo = await detect(nombre)

    console.log({ sexo })

}

module.exports = { calcularGenero, obtenerGenero, postCalcularGenero }