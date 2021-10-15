import React, {useState} from 'react';
import clsx from 'clsx';
import InputBase from '@material-ui/core/InputBase';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logoDane from "../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "../img/Logo_Observatorio_inmobiliario_Opcion1.svg";
import Instructivo from "../img/subregion-pdet-geovisor-ayuda-geoportal-dane.webp";
import { AiOutlineDownload, AiOutlineFilter, AiOutlineQuestionCircle,
         AiOutlineSearch,
         AiFillMail } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { FaSearchLocation,
         FaFolderOpen,
         FaCog,
         FaBookReader,
         FaInfo,
         FaUserAlt } from "react-icons/fa";
import ModalAyuda from './ui/modalAyuda';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  Instructivo:{
      height:'25em'
  },
  contenedorSubMenu:{
    marginTop:'8px',
    paddingLeft:1,
    paddingRight:1,
    minWidth: '85px', 
    fontSize: '12px',
    textTransform: 'none',
    fontFamily: 'Roboto',
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
    cursor: 'pointer',
    // webkitBackfaceVisbility: 'hidden',
     borderRadius:'100%',
    webkitTransition:'all 0.3s ease-in-out',
    "&:hover": {
      backgroundColor: '#666',
      color: '#fff',
      boxShadow:' 0 0 0 10px #666'
     }
  },
formControl: {
    margin: theme.spacing(1),
    minWidth: '18em',
    borderRadius:'50%',
  },
select: {    
    borderRadius:5,
    height: 50,
    fontSize: '10px',
    borderBotton:'none',
    backgroundColor: '#fff',
    border: '1px solid #000',
},
modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 10,
      textAlign: 'center',
    },
    contenedorParrafo:{
      width: 500,
    },
    logoModal:{
        margin: 'auto',
        // paddingTop: '2em',
    },
    search:{      
      marginLeft: 'auto',
      justifyContent:'flex-end',
      border: '1px solid #8A8A8A  ',
      borderRadius: '15px',
      boxShadow: '0 2px 6px 0 rgba(0,0,0,0.24)',
      transition: 'all ease-in-out 0.2s',        
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

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
    function a11yProps(index) {
      return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      

  //State del menu modal
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
      setValue(value);
  };
  //---fin state modal

  //  State del menu drawer
  const [values, setValues] = useState(2);
  const handleChanges = (e, value) => {
      setValues(value);
  };
  //---fin state menu drawer

  const [age, setAge] = React.useState('');
  const handleChanger = (event) => {
    setAge(event.target.value);
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
          {/* <InputBase
                            className = {classes.search}                            
                            placeholder={'Buscar...'}
                            startAdornment={<AiOutlineSearch />}
                            /> */}
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

        <Tabs value={values} onChange={handleChanges} >
                    <Tab className={classes.contenedorSubMenu} onClick={handleOpen} label='Ayuda' icon= {<AiOutlineQuestionCircle 
                        
                        className={classes.icono} fontSize = {20} />} {...a11yProps(0)} />
                    <Tab className={classes.contenedorSubMenu} label='Ubicación' icon= {<FaSearchLocation className={classes.icono} fontSize = {20} />} {...a11yProps(4)} />
                    <Tab className={classes.contenedorSubMenu} label='Temas' icon= {<FaFolderOpen className={classes.icono} fontSize = {20} />} {...a11yProps(1)} />       
                    <Tab className={classes.contenedorSubMenu} label='Herramientas' icon= {<FaCog className={classes.icono} fontSize = {20}/>} {...a11yProps(2)} />       
        </Tabs>       
        <TabPanel value={values} index={1}>            
              <Typography variant="body1" color="initial">Realice la selección geográfica que desea ver en el mapa</Typography>
              <FormControl variant="filled" className={classes.formControl} >
                <InputLabel id="demo-simple-select-filled-label">Departamento </InputLabel>
                <Select
                  
                  color= 'primary'
                  className={classes.select}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChanger}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
        </TabPanel>
        <TabPanel  value={values} index={2}>
              <Typography align='left'  variant="body1" color="initial">Envíe su consulta por correo electrónico o tramite su petición, queja, reclamo, sugerencia o denuncia en el formulario DANE. </Typography>  
            
        </TabPanel> 
        <TabPanel  value={values} index={3}>
              <Typography align='left'  variant="body1" color="initial">Envíe su consulta por correo electrónico o tramite su petición, queja, reclamo, sugerencia o denuncia en el formulario DANE. </Typography>  
            
        </TabPanel> 
        {/* <Box padding = {2}>

        <Grid container 
                    color = "error"
                    alignContent = "center"
                    alignItems = "center"
                    justifyContent ="space-between">
                <Grid item  
                color = "error"
                    sm ={3}
                    className={classes.container}>
                        <AiOutlineQuestionCircle 
                        onClick={handleOpen}
                        className={classes.icono} fontSize = {25} />
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
        </Box> */}
        
        {/* <ModalAyuda/> */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <Typography
                        variant ='h6'>Geovisor Análisis Inmobiliario</Typography>
            <Tabs value={value} onChange={handleChange} >
                    <Tab label='Guía Rápida' icon= {<FaBookReader/>} {...a11yProps(0)} />
                    <Tab label='Acerca de' icon= {<FaInfo/>} {...a11yProps(1)} />
                    <Tab label='Contacténos' icon= {<FaUserAlt/>} {...a11yProps(2)} />       
            </Tabs>
            <TabPanel value={value} index={0}>
                <img className={classes.Instructivo} src= {Instructivo} alt= 'Instructivo geovisor' />
            </TabPanel>
            <TabPanel className={classes.contenedorParrafo} value={value} index={1}>
              <Typography align='left' variant="body1" color="initial">Geovisor de Análisis Inmobiliario: Herramienta de consulta y visualización de la información sociodemográfica del DANE correspondiente Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
            </TabPanel>
            <TabPanel className={classes.contenedorParrafo} value={value} index={2}>
              <Typography align='left'  variant="body1" color="initial">Envíe su consulta por correo electrónico o tramite su petición, queja, reclamo, sugerencia o denuncia en el formulario DANE. </Typography>
             
            {/* <Typography align='left' style={{display: 'block'}}> <MenuIcon className={classes.logoModal}/>  Ventanilla única de PQRSD, aquí.</Typography>
            <Typography align='left' style={{display: 'block'}}><AiFillMail /> contacto@dane.gov.co</Typography>  */}
            
            <Tab label="Ventanilla única de PQRSD, aquí." icon={<MenuIcon />}/>
            <Tab label="contacto@dane.gov.co" icon={<AiFillMail />}/>
            </TabPanel> 
          </div>
        </Fade>
      </Modal>                
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
