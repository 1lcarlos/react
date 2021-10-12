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
      h3: {
        fontWeight: 300
      }  
    }
  });

export default theme;