import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../img/assets/logo.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Typography, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles( theme => ({
        tooblarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: '3.5em'
        },
        logo:{
            height: '7em'
        } ,
        tabContainer:{
            marginLeft: 'auto'
        },
        tab:{
            ...theme.typography.tab,
            minWidth:10,
            marginLeft: '25px',
        },
        button:{
            ...theme.typography.cotizacion,
            borderRadius: '50px',
            marginLeft: '50px',
            marginRight: '25px',           
            height: '45px',            
        }
  }));

function Header1() {
    const classes = useStyles();
    const [value, setValue]= useState(0);
    const handleChange = (e, value) =>{
        setValue(value);
    }
    return ( 
        <React.Fragment>
                <ElevationScroll>
                    <AppBar position= 'fixed'>
                        <Toolbar disableGutters>
                            <img alt='logo header' className={classes.logo} src={logo} />
                            <Tabs className={classes.tabContainer}
                                  value={value} onChange={handleChange}
                                  indicatorColor='secondary' >
                                <Tab className={classes.tab} component={Link} to='/' label='Home' />
                                <Tab className={classes.tab} component={Link} to='/servicios' label='Servicios' />
                                <Tab className={classes.tab} component={Link} to='/revolucion' label='La revolución' />
                                <Tab className={classes.tab} component={Link} to='/nosotros' label='Nosotros' />
                                <Tab className={classes.tab} component={Link} to='/contacto' label='Contacto' />
                            </Tabs>
                            <Button className={classes.button}
                                    variant="contained" color="secondary">
                              Cotizacion Gratis
                            </Button>                            
                        </Toolbar>    
                    </AppBar>
                </ElevationScroll>   
                <div className={classes.tooblarMargin} />
        </React.Fragment>
    );
}

export default Header1;         