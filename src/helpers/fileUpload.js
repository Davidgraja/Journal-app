export const fileUpload = async ( file ) => {
    if(!file) throw new Error('no existe ni un solo archivo que subir !')
    const cloudUrl  = 'https://api.cloudinary.com/v1_1/dym350jf0/upload';

    const formData  = new FormData();

    formData.append('upload_preset' ,'react-journal');
    formData.append('file' , file)

    try {

        const res = await fetch(cloudUrl ,{
            method:'POST',
            body : formData
        } )

        if(!res.ok) throw new Error('no se pudo subir la imagen');

        const cloudResponse = await res.json();
        
        return cloudResponse.secure_url;
        
    } catch (error) {
        
        throw new Error(error);
    }
}