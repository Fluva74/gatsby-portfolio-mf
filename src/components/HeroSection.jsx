import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/material/styles';
import Social from './Social';
import Hidden from '@mui/material/Hidden';
import Zoom from '@mui/material/Zoom';
import { StaticImage } from 'gatsby-plugin-image';



const useStyles = makeStyles((theme) => ({
    section: {
        height: "90vh",
        position: "relative"
    },
    content: {
        height: "100%",
        zIndex: 100,
        position: "relative",
    },
    container: {
        height: "100%"
    },
    overlay: {
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.4)",
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    button: {
        color: "rgb(255,215,0)"
    },
    heroImage: {
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 1,
    }
    
}))

export default function HeroSection() {
    if (typeof window !== "undefined") {
        const styles = useStyles()
        const [shouldShow, setShouldShow] = useState(false)
        useEffect(() => setShouldShow(true))
        return (
            <Paper className={styles.section} id="about">
                <StaticImage className={styles.heroImage} src="https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGRhcmslMjBwdXp6bGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <div className={styles.overlay}></div>
                <Container className={styles.container} maxWidth="md">
                    <Grid className={styles.content} container justifyContent="space-between" alignItems="center">
                        <Zoom in={shouldShow}>
                            <Grid item sm={8}>
                                <Typography component="h1" variant="h3">Hi, my name is Mike Finnegan. I am a full stack developer.</Typography>
                                <Typography variant="h5">I build websites, web applications and responsive user interfaces.</Typography>
                                <Box my={2.5}>
                                    <Button href="mailto:fluvatech@gmail.com" variant="outlined" className={styles.button}>Contact Me!</Button>
                                </Box>
                            </Grid>
                        </Zoom>
                   
                        <Hidden xsDown>
                            <Grid item>
                                <Social direction="column" />
                            </Grid>
                        </Hidden>
                    
                    </Grid>
                </Container>
            
            </Paper>
        )
      
    }
}
