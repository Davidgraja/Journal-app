import { useRef } from "react"

import { IconCloudUpload } from '@tabler/icons-react';

export const AddNotes = () => {
    const fileInputRef = useRef();

    return (
        <section className=" p-5  xl:w-11/12 xl:mx-auto 2xl:w-8/12">
            <div className="p-2 flex gap-x-4 justify-end">
                <input className=" hidden" type="file" ref={fileInputRef}/>
                
                <span title="Subir imagen">
                    <IconCloudUpload  className=' rounded p-1 hover:cursor-pointer hover:bg-indigo-600 hover:text-white' size={'34px'} />
                </span>

                <button className="p-1 rounded hover:bg-indigo-600 hover:text-white">Guardar</button>
            </div>

            <form className="  xl:p-2">

                <input className="w-full p-2 outline-none focus:border-b focus:border-b-indigo-600" type="text" placeholder="titulo" />
                
                <textarea className='w-full min-h-[200px] p-2 outline-none focus:border-b focus:border-b-indigo-600' name="description" id="description" cols="30" rows="10"  placeholder="Descripción"></textarea>
            </form>

            {/* <section className=" w-full bg-red-700 min-h-[300px]">
                <p> fotos</p>
            </section> */}
        </section>
    )
}
