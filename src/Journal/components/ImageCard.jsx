import { IconTrash , IconExternalLink } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { startDeletePhoto, startUpdateNote } from '../../store/journal/thunks';
import { updateMessageSave, updatePhotos } from '../../store/journal/journalSlice';

export const ImageCard = ({url}) => {
    
    //* Redux :
    const dispatch = useDispatch(); 

    const onDeletePhoto = () =>{
        const separator  = url.split('/');
        const  indexId = separator[separator.length - 1].split('.'); 
        const id = indexId[0];
        
        dispatch(startDeletePhoto(id));
        dispatch(updatePhotos(url));
        dispatch(startUpdateNote())

        setTimeout(() => {
            dispatch(updateMessageSave(null));
        }, 5000);
    }
    
    return (
        <div >
            <section className="  flex items-center justify-evenly mb-1">
                <button className="p-1 rounded-md m-1  text-red-600 hover:bg-red-600 hover:text-white" title='Eliminar' onClick={ onDeletePhoto }> 
                    <IconTrash />
                </button>

                <a className='p-1 rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white' href={url} title="Ver imagen" target="_blank" rel="noreferrer">
                    <IconExternalLink/>
                </a>

            </section>

            <img src={url} alt="Imagen de la nota" />
        </div>
    )
}
