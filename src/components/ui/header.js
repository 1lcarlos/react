import React from 'react';
import { Box, Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, 
        } from '@material-ui/core/styles';
import { AiOutlineSearch } from "react-icons/ai";
import logoDane from "../../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "../../img/Logo_Observatorio_inmobiliario_Opcion1.svg";


const useStyle = makeStyles({
    root: {
        height: '50px'
    },
    container:{
        
    },
    logo: {
        maxWidth: '10rem',
        height: "3.5rem",
        width: "100%"
        
    },
    accesibilidad:{
        width: 22,
        height:22,
        marginTop:10,
        marginRight:5,
        borderRadius: '50%',
        border: '1px solid #E6E6E6'     
    },
    search:{
        marginTop: 10,
        marginRight:5,
        border: '1px solid #8A8A8A  ',
        borderRadius: '15px',
        boxShadow: '0 2px 6px 0 rgba(0,0,0,0.24)',
        transition: 'all ease-in-out 0.2s',        
        '& > svg': {
            color: "#8A8A8A",
          }
    }
});


const Header = () => {
    const classes = useStyle();
    return ( 

        <header>
            
            <Grid container>
                <Grid container item xs={6} sm={4} >
                   
                        <Grid item xs={12} sm ={6} className={classes.container}>
                            <a href = "https://www.dane.gov.co/" target = "_blank">
                                <img className={classes.logo} src= {logoDane} />
                            </a>
                            
                        </Grid>
                        <Grid item xs={12} sm ={6}>
                            <img className={classes.logo} src= {logoObservatorio} />        
                        </Grid>
                    
                </Grid>
                <Grid container item xs={6} sm={8} justifyContent = "flex-end">                
                
                    <Box >
                            <InputBase
                            className = {classes.search}                            
                            placeholder={'Buscar...'}
                            startAdornment={<AiOutlineSearch />}
                            />
                     </Box>       
                                           
                            {/* <img className={classes.accesibilidad} src= {aumentarFuente} />
                            <img className={classes.accesibilidad} src= {disminuirFuente} />
                            <img className={classes.accesibilidad} src= {sonido} /> */}
                    
                </Grid>
            </Grid>
            
        </header>

     );
}



export default Header;
