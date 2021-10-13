import { createTheme } from '@material-ui/core/styles';

const azul = "#0B72B9";
const naranja = "#FFBA60";

const theme = createTheme({
    common: {
      azul: `${azul}`,
      naranja: `${naranja}`
    },
    palette: {
      primary: {
        main: `${azul}`,
      },
      secondary: {
        main: `${naranja}`,
      }      
    },
    typography:{
      tab: {
        fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1em',
      }, 
      cotizacion:{
        fontFamily:'Pacifico',
        fontSize: '1rem',
        textTransform: 'none',
        color:'white',
      }  
    }
  });

export default theme;