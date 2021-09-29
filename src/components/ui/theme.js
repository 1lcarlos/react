import { createTheme } from '@material-ui/core/styles';

const aguamarina = "#15e7e6de";
const verdechillon = "#15e737de";

const theme = createTheme({
    common: {
        azul: `${aguamarina}`,
        verde: `${verdechillon}`
    },
    palette: {
      primary: {
        main: `${aguamarina}`,
      },
      secondary: {
        main: `${verdechillon}`,
      },
    },
  });

export default theme;