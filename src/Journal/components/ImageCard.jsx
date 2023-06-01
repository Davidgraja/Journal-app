import { IconTrash , IconExternalLink } from '@tabler/icons-react';

export const ImageCard = ({url}) => {
    return (
        <div >
            <section className="  flex items-center justify-evenly mb-1">
                <button className="p-1 rounded-md m-1  text-red-600 hover:bg-red-600 hover:text-white" title='Eliminar' onClick={ () => console.log(url) }> 
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
