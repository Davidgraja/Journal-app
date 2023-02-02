// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { config } from 'dotenv';

// ? primera solucion para el manejo de las variables de entorno junto a jest observar el archivo personalizado "getEnvironments" para observar el resto de la configuracion
// import { getEnvironments } from './src/helpers/getEnvironments';
// require('dotenv').config({
//     path : '.env.test'
// })

// jest.mock('./src/helpers/getEnvironments', ()=>({
//     getEnvironments:() => ({...process.env})
// }))

// ? segunda solucion para el menejo de las varibles de entorno junto a jest - observar el archivo "babel.config.js" para observar el resto de la configuracion 
config({
    path: '.env.test'
})