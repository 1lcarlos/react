import { createTheme } from '@material-ui/core/styles';

const blanco = "#fff";
const vinotinto = "#97034C";

const theme = createTheme({
    common: {
        blanco: `${blanco}`,
        vinotinto: `${vinotinto}`
    },
    palette: {
      primary: {
        main: `${blanco}`,
      },
      secondary: {
        main: `${vinotinto}`,
      }      
    },
    typography:{
      h3: {
        fontWeight: 300
      }  
    }
  });

export default theme;