import { useSelector } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { blackTheme } from './blackTheme';
import { whiteTheme } from './whiteTheme';

export const AppTheme = ( {children} ) => {

    const {darkMode} = useSelector( (state) => state.theme )

    return (
        <ThemeProvider theme={ darkMode ? blackTheme :  whiteTheme}>
            <CssBaseline/>

            {children}
        </ThemeProvider>
    )
}
