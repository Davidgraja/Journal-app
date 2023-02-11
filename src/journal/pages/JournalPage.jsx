import { NoteView, NothingSelectedView } from '../views';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal';
import { useDispatch, useSelector } from 'react-redux';
import { MenuUser } from '../layout/Menu';

export const JournalPage = () => {
    const { isSaving , active } = useSelector( (state)=> state.journal )
    const dispatch = useDispatch();
    
    const onClickNewNote = () =>{
        dispatch(startNewNote()); 
    }

    return (
        <MenuUser>

            {
                (!!active) 
                ? <NoteView/>
                : <NothingSelectedView/>
            }

            
            <IconButton
                    disabled ={ isSaving }
                    onClick={ onClickNewNote }
                    size='large'
                    sx={
                        {
                        color: 'white' ,
                        backgroundColor: 'error.main' ,
                        ':hover' : {backgroundColor:'error.main' , opacity:0.9} ,
                        position:'fixed' ,
                        right:50,
                        bottom:50
                        }
                    }
                >
                <AddOutlined sx={{fontSize:30}}/>
            </IconButton>
        </MenuUser>
    )
}
