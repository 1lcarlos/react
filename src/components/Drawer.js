import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Grid, Box } from '@material-ui/core';
import logoDane from "../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "../img/Logo_Observatorio_inmobiliario_Opcion1.svg";
import { AiOutlineDownload, AiOutlineFilter, AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { FaSearchLocation,
         FaFolderOpen,
         FaCog } from "react-icons/fa";


const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  palette:{
      main: "#A2024D"
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo: {
      height:'3em'
  },
  container:{
    display: 'initial',
    textAlign: 'center',
    position: 'relative',
    padding: '8px 4px',
  },
  typography:{
    fontSize: '.9em',
    color:'#666',
    marginTop:'.3em'
  },
  icono:{
    background: 'transparent',
    height:'.9em',
    color:'#666',
    padding: '0',
    // webkitBackfaceVisbility: 'hidden',
     borderRadius:'100%',
    webkitTransition:'all 0.3s ease-in-out',
    "&:hover": {
      backgroundColor: '#666',
      color: '#fff',
      boxShadow:' 0 0 0 10px #666'
     }
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: '#f8f8f8',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color = "primary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap>
            Geovisor de Analisis Inmobiliario 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          
          <Grid item xs={12} sm ={6}>
            <img className={classes.logo} src= {logoDane} alt= 'logo_DANE' />
          </Grid>
          <Grid item xs={12} sm ={6}>
             <img className={classes.logo} src= {logoObservatorio} alt= 'logo_Observatorio' />        
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        {/* <ButtonGroup>
                <Button variant="text" 
                startIcon = {<AiOutlineQuestionCircle/>}
                color="default"> Ayuda
                  
                </Button>
                <Button variant="text" 
                startIcon = {<AiOutlineFilter/>}
                color="default"> consulta
                  
                </Button>
                <Button variant="text" 
                startIcon = {<FiLayers/>}
                color="default">
                  mapa base
                </Button>
                <Button variant="text" 
                startIcon = {<AiOutlineDownload/>}
                color="default">
                  descarga
                </Button>
        </ButtonGroup> */}
        <Box padding = {2}>

        <Grid container 
                    color = "error"
                    alignContent = "center"
                    alignItems = "center"
                    justifyContent ="space-between">
                <Grid item  
                color = "error"
                    sm ={3}
                    className={classes.container}>
                        <AiOutlineQuestionCircle className={classes.icono} fontSize = {25} />
                        <Typography className={classes.typography} paragraph>
                            Ayuda
                        </Typography>
                </Grid>
                <Grid item sm ={3}
                className={classes.container}>
                        <FaSearchLocation className={classes.icono} fontSize = {25} />
                        <Typography className={classes.typography} paragraph>
                            Ubicación
                        </Typography>
                </Grid>
                <Grid item  sm ={3}
                className={classes.container}>
                        <FaFolderOpen className={classes.icono} fontSize = {25} />
                        <Typography className={classes.typography} paragraph>
                            Temas
                        </Typography>
                </Grid>
                <Grid item sm ={3}
                className={classes.container}>
                    <FaCog className={classes.icono} fontSize = {25}/> 
                    <Typography className={classes.typography} paragraph>
                            Herramientas
                    </Typography>    
                </Grid>
        </Grid>
        </Box>
        <Divider />
        <Typography variant="h6" noWrap>
            Filtro
        </Typography>
            <Box padding = {5} ></Box>
            <Divider />
        <Typography variant="h6" noWrap>
            Capas
          </Typography>       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
      </main>
    </div>
  );
}
