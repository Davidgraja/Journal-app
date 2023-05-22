import { IconNote } from '@tabler/icons-react';

export const NoNotes = () => {
    return (
        <section className="w-full h-full grid place-content-center place-items-center ">
            
            <IconNote className=' text-indigo-600' size={'80px'} stroke={1}/>
            <h1 className=' text-lg'>Seleccione o crea un apunte</h1>
        
        </section>
    )
}
