export const Images = ({ urls = [] }) => {
    return (

        <figure className=" mt-4 p-3  w-full  min-h-[300px] grid justify-evenly gap-2  grid-cols-personalized ">
                    
                    {
                        urls.map( image => (
                            <a key={image} href={image} title="Abrir en una pestaña nueva" target="_blank" rel="noreferrer" >
                                <img 
                                    className=" rounded-md  hover:border "
                                    src={image} 
                                    alt="fotos del usuario" 
                                />
                            </a>
                        ))
                    }

        </figure>
    )
}
