import React, {useState} from 'react';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "" },
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
        color: "#ffbf00",
    },
    avatar: {
        marginRight: "auto",
        color: "black",
        fontWeight: 600,
        fontSize: "1.2em",
        backgroundColor: "#ffbf00",
    }
}));


export default function Header() {
    if (typeof window !== "undefined") {
        const styles = useStyles();
        const [open, setOpen] = useState(false)
        return (
            <>
                <AppBar position="sticky" color="default">
                    <Container maxWidth="md">
                        <Toolbar disableGutters>
                            <Avatar className={styles.avatar}>MF</Avatar>
                            <Hidden xsDown>
                                {navigationLinks.map((item) => (
                                    <Link
                                        className={styles.link}
                                        color="textPrimary"
                                        variant="button"
                                        underline="none"
                                        href={item.href}>{item.name}</Link>
                                ))}
                            </Hidden>
                            <Hidden smUp>
                                <IconButton>
                                    <MenuIcon onClick={() => setOpen(true)} />
                                </IconButton>
                            </Hidden>
                        </Toolbar>
                    </Container>
                    <SwipeableDrawer
                        anchor="right"
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => (false)}>
                        <div>
                            <IconButton>
                                <ChevronRightIcon onClick={() => setOpen(false)} />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            {navigationLinks.map((item) => (
                                <ListItem>
                                    <Link
                                        className={styles.link}
                                        color="textPrimary"
                                        variant="button"
                                        underline="none"
                                        href={item.href}>{item.name}</Link>
                                </ListItem>
               
                            ))}
                        </List>
                
                    </SwipeableDrawer>
                </AppBar>
            </>
        
        
        
        );
    }
}
