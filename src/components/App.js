import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/theme";
import Drawer from "./Drawer";
import Mapa from './mapa';
// import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}> 
      
        <Drawer/>
        <div>
          <Mapa/>
        </div>
      
    </ThemeProvider> 
  );
}

export default App;
