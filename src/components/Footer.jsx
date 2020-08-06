import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
    return(
        <footer style={{padding:'15px', background:'rgba(0,0,0,0.8)', width:'100%'}}>
            <Typography variant="body2" align="center" style={{color:'white'}}>Este sitio tiene derechos reservados copyright. Cualquier uso mal intencionado del mismo no nos hace responsables.</Typography>
        </footer>
    )
}

export default Footer;