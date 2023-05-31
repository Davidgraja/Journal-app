import { useEffect, useMemo, useRef , useState } from "react"

import { IconCloudUpload } from '@tabler/icons-react';
import { Images, Navbar } from "../components";
import { UploadImages } from "../components/views/UploadImages";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

import { setActiveNote, startNewNote, startUpdateNote, startUploadingFiles, updateMessageSave } from "../../store/journal";


export const AddNotes = () => {

    const fileInputRef = useRef();
    const date = useMemo( () => new Date().toLocaleString() , [] )
    
    //* Redux 
    const { active } = useSelector(state => state.journal )
    const dispatch = useDispatch();
    
    //* hooks
    const  [files, setfiles] = useState([]);

    const [noteForm, setNoteForm] = useState({
        title  : active?.title ,
        body : active?.body
    });

    const {title , body , onEventInput , formState } = useForm(noteForm)

    useEffect(() => {
        
        if(active){
            dispatch(setActiveNote({...active , title , body }))
        }
        else dispatch(setActiveNote({...active , ...formState , date }))
    }, [title , body])

    useEffect(() => {
        setNoteForm({ 
            title  : active?.title ,
            body : active?.body
        })
    }, [active])
    

    
    //* Functions 
    const onSaveNote = () =>{
        dispatch(setActiveNote({
            title,
            body ,
            imageUrl : files,
            date
        }))

        dispatch(startUploadingFiles(files));
        dispatch(startNewNote());
        
        
        setTimeout(()=>{
            dispatch(updateMessageSave(null));
        },5000)

        setfiles([]);
    }

    const onUpdateNote = async () => {
        await dispatch(  startUploadingFiles(files));
        dispatch(startUpdateNote());

        setTimeout(()=>{
            dispatch(updateMessageSave(null));
        },5000);
        
        setfiles([]);

    }

    const onFileInputChange = ({target}) =>{
        if(target.files === 0) return ;
        setfiles( target.files)
    } 


    return (
        <>
            <Navbar/>
            <section className=" p-5   xl:w-11/12 xl:mx-auto 2xl:w-8/12">
                <div className="p-2 flex gap-x-2 justify-between items-center">

                    <p>{ active?.date }</p>
                    
                    <section  className="flex justify-between gap-x-4 ">
                            
                        <input className=" hidden" type="file" ref={fileInputRef} multiple onChange={onFileInputChange}/>
                        
                        <span title="Subir imagen"  onClick={()=> fileInputRef.current.click() }>
                            <IconCloudUpload  className=' rounded p-1 hover:cursor-pointer hover:bg-indigo-600 hover:text-white' size={'34px'} />
                        </span>

                        {
                            active?.id ? 
                            <button className="p-1 rounded hover:bg-indigo-600 hover:text-white" onClick={onUpdateNote} >Actualizar</button> 
                            : 
                            <button className="p-1 rounded hover:bg-indigo-600 hover:text-white" onClick={onSaveNote}  >Guardar</button>
                        }

                    </section>

                </div>

                <form className=" xl:p-2">

                    <input className="w-full p-2 font-bold outline-none focus:border-b focus:border-b-indigo-600 placeholder:font-normal" type="text" placeholder="titulo" name="title" value={title} onChange={onEventInput}/>
                    
                    <textarea className='w-full min-h-[200px] p-2 outline-none focus:border-b focus:border-b-indigo-600' name="body"  value={body} onChange={onEventInput} id="description" cols="30" rows="10"  placeholder="Descripción"  ></textarea>

                </form>

                <section className="p-2">

                    <h1 className=" border-b-2 border-indigo-600  inline-block pb-1" >Tus imagenes</h1>

                    {
                        files.length > 0 ?  <p className="text-center p-2"> Por Favor guarde los cambios para ver las imagenes cargadas - archivos { files.length}</p> : 
                        active?.imageUrl?.length > 0 ? <Images urls={ active?.imageUrl }/>  : <UploadImages eventOnChange={ onFileInputChange }/>

                    } 

                </section>

            </section>
        </>
    )
}
