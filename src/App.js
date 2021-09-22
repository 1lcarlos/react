import React from "react";
import Drawer from "./Drawer";
import Mapa from './mapa';
// import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <Drawer/>
      <div>
          <Mapa/>
      </div>
      {/* <ThemeProvider theme={theme}>
        
      </ThemeProvider> */}
      
    </div>
  );
}

export default App;
