import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    palette:{
        main: "#A2024D"
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
      },    
    
  }));




function ModalAyuda(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpen = () => {
        setOpenModal(true);
        };

    const handleClose = () => {
        setOpenModal(false);
        };


    return (
        <div>
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
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalAyuda;