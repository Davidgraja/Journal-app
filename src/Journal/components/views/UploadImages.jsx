import { useRef } from "react"

export const UploadImages = () => {
    const fileInputRef = useRef()

    return (
        <div className="min-h-[300px] flex  justify-center items-center gap-x-8">

            <input className=" hidden" type="file" ref={fileInputRef}/>
            <p className="inline-bloxk">No hay imagenes</p> 
            <button className=" p-1 md:p-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"  onClick={()=> fileInputRef.current.click()}> Subir imagenes</button>

        </div>
    )

}
