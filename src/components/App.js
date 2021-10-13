import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/theme";
// import theme from "./ui/theme_copy";
import Header from "./ui/header1"
import Drawer from "./Drawer";
import Mapa from './mapa';
// import { ThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}> 
      {/* <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path='/' component={() => <div>Home</div>} />
              <Route exact path='/servicios' component={() => <div>Servicios</div>} />
              <Route exact path='/revolucion' component={() => <div>La Revolucion</div>} />
              <Route exact path='/nosotros' component={() => <div>Nosotros</div>} />
              <Route exact path='/contacto' component={() => <div>Contacto</div>} />
              <Route exact path='/customSoftware' component={() => <div>Custom Software</div>} />
              <Route exact path='/mobileApps' component={() => <div>Mobile Apps</div>} />
              <Route exact path='/website' component={() => <div>Website</div>} />
              <Route exact path='/cotizacion' component={() => <div>Cotización</div>} />
          </Switch>  
      </BrowserRouter> */}

          <Drawer/>
        <div>
          <Mapa/>
        </div>
      
    </ThemeProvider> 
  );
}

export default App;
