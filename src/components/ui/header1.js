import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../img/assets/logo.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
        }
  }));

function Header1() {
    const classes = useStyles();
    return ( 
        <React.Fragment>
                <ElevationScroll>
                    <AppBar position= 'fixed'>
                        <Toolbar disableGutters>
                            <img alt='logo header' className={classes.logo} src={logo} />
                            <Tabs className={classes.tabContainer} >
                                <Tab label='Home' />
                                <Tab label='Servicios' />
                                <Tab label='La revolución' />
                                <Tab label='Nosotros' />
                                <Tab label='Contacto' />

                            </Tabs>
                        </Toolbar>    
                    </AppBar>
                </ElevationScroll>   
                <div className={classes.tooblarMargin} />
        </React.Fragment>
    );
}

export default Header1;         