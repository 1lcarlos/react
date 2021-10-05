import { createTheme } from '@material-ui/core/styles';

const azul = "#0b72b9";
const najanja = "#ffba60";

const theme = createTheme({
    common: {
        azul: `${azul}`,
        verde: `${najanja}`
    },
    palette: {
      primary: {
        main: `${azul}`,
      },
      secondary: {
        main: `${najanja}`,
      }      
    },
    typography:{
      h3: {
        fontWeight: 300
      }  
    }
  });

export default theme;