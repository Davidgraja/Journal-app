import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name : 'dym350jf0',
    api_key : '293466117148169',
    api_secret : 'l2KqfB19PGuw0frBniiIKF1Byl4',
    secure : true
})

describe('Pruebas en fileUpload', () => { 
    
    test('debe de subir el archivo correctamente a cloudinary', async () => { 
        const imageUrl = 'https://http2.mlstatic.com/D_NQ_NP_853313-MLA44174458522_112020-O.webp';

        // debo de crear el archivo como tal para enviarlo a cloudinary
        const res = await fetch(imageUrl);
        const blob = await res.blob(); // obtenemos los bytes de la imagen
        const file = new File([blob] , 'foto.jpg') // creamos el archivo 


        const url = await fileUpload( file );

        expect( typeof url).toBe('string');

        // obtener el id  de la imagen que nos entrega cloudinary
        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.webp', '');

        // peticion hacai cloudinary ara eliminar la imagen
        const resCloudinary = await cloudinary.api.delete_resources(['journal-app/' +  imageId],{
            resource_type:'image'
        });
        
    })

    test('debe de retornar null', async () => {
        const file = new File([] , 'foto.jpg');

        const url = await fileUpload( file );
        
        expect(url).toBe(null);

    })

})  