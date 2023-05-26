import { useMemo, useRef } from "react"

import { IconCloudUpload } from '@tabler/icons-react';
import { Images, Navbar } from "../components";
import { UploadImages } from "../components/views/UploadImages";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";

import { startNewNote, updateMessageSave } from "../../store/journal";
import { useNavigate } from "react-router-dom";

export const AddNotes = () => {
    const fileInputRef = useRef();
    const date = useMemo( () => new Date().toLocaleString() , [] )
    const imagesUrl = [];
    
    //* Redux 
    const dispatch = useDispatch();

    //* hooks
    const noteForm  ={
        title : '',
        body : '',

    }

    const {title , body , onEventInput} = useForm(noteForm);


    const navigate = useNavigate();

    //* Functions 
    const onSaveNote = () =>{
        dispatch(startNewNote({title , body, imagesUrl , date}))

        navigate('/')
        
        setTimeout(()=>{
            dispatch(updateMessageSave(null))
        },5000)
        
    }
    return (
        <>
            <Navbar/>
            <section className=" p-5   xl:w-11/12 xl:mx-auto 2xl:w-8/12">
                <div className="p-2 flex gap-x-2 justify-between items-center">

                    <p>{ date }</p>
                    
                    <section  className="flex justify-between gap-x-4 ">
                            
                        <input className=" hidden" type="file" ref={fileInputRef}/>
                        
                        <span title="Subir imagen">
                            <IconCloudUpload  className=' rounded p-1 hover:cursor-pointer hover:bg-indigo-600 hover:text-white' size={'34px'} />
                        </span>

                        <button className="p-1 rounded hover:bg-indigo-600 hover:text-white" onClick={onSaveNote}  >Guardar</button>


                    </section>

                </div>

                <form className=" xl:p-2">

                    <input className="w-full p-2 font-bold outline-none focus:border-b focus:border-b-indigo-600 placeholder:font-normal" type="text" placeholder="titulo" name="title" value={title} onChange={onEventInput}/>
                    
                    <textarea className='w-full min-h-[200px] p-2 outline-none focus:border-b focus:border-b-indigo-600' name="body"  value={body} onChange={onEventInput} id="description" cols="30" rows="10"  placeholder="Descripción"  ></textarea>

                </form>

                <section className="p-2">

                    <h1 className=" border-b-2 border-indigo-600  inline-block pb-1" >Tus imagenes</h1>

                    {
                        imagesUrl.length == 0 ?  <UploadImages/> : <Images urls={ imagesUrl }/> 
                    }

                </section>

            </section>
        </>
    )
}
