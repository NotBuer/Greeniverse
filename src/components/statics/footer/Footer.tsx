import React from 'react';
import Container  from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer(){
    return(
        <>
        <Box px={{ xs: 3, sm: 10}} py={{xs: 5, sm:10}} style={{backgroundColor: "black", color: "white"}}>
            <Container maxWidth='lg'> 
            <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href= '/' color='inherit'>Contact</Link>
                            </Box>
                            <Box>
                            <Link href= '/' color='inherit'>Suport</Link>
                        </Box>
                        <Box>
                            <Link href= '/' color='inherit'>Privacy</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link href= '/' color='inherit'>Login</Link>
                            </Box>
                            <Box>
                            <Link href= '/' color='inherit'>Register</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link href= '/' color='inherit'>Backup</Link>
                            </Box>
                            <Box>
                            <Link href= '/' color='inherit'>History</Link>
                        </Box>
                        <Box>
                            <Link href= '/' color='inherit'>Roll</Link>
                        </Box>
                    </Grid>
                </Grid>
               

                <Box textAlign='center' pt={{ xs: 5, sm: 10}} pb={{ xs: 5, sm: 0}}>
              Greeniverse &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
        </>
    );
}

export default Footer;