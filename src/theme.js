import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#282a36",
                    
                }
            }
        }
    },

    palette: {
        primary: {

            main: '#709AA8',
        },
        secondary: {
            main: "#ffff",
            dark:"#FFE300"
        },
        text: {
            primary: "#212A3E"
        },
        background: {
            default: "#9BA4B5",
        } ,
        icon:{
            main:"#000"
        }
    },
});
