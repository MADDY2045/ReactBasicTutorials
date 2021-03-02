import React from 'react'
import axios from 'axios';
function KarixHome() {

    const getTemplatesList = () =>{
        const username = '2ecc6220-e7a1-4dc4-9928-4a78b990e407'
        const password = '4667110b-67a1-4b98-a3dd-7045ac56c796'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const url = '/whatsapp/template/'
console.log(token)
axios({
    method:'GET',
    url:url,
    headers: {
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
    }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})


    }
    return (
        <div>
            <h1>Karix Home</h1>
            <button onClick={ getTemplatesList }>Create</button>
        </div>
    )
}

export default KarixHome
