import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Hidden from '@mui/material/Hidden';


const useStyles = makeStyles((theme) => ({
    mainTitle: {
        color: "#ffbf00",
    },
    cardMedia: {
        width: 160,
        flex: 2,
    },
    card: {
        display: "flex",
        justifyContent: "spaceBetween",
        height: 300,
    },
    cardContent: {
        flex: 5,
    },
    icon: {
        color:  "#ffbf00",
    },
    tag: {
        color: "#838382",
        marginRight: 5,
        marginBottom: 5,
    },
    links: {
        marginRight: "auto",
    }
}))

function TagsContainer({ tags }) {
    const styles = useStyles()
    return (
        <div>
            {tags.map((tag) => (
                <Chip
                    className={styles.tag}
                    label={tag}
                    variant="outlined"
                    key={tag}>
                    </Chip>
            ))}
        </div>
    )
}



function Project({ title, description, imageUrl, tags, links }) {
    const styles = useStyles()
    return (
        <Grid item>
            <div>
            <Card className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography variant="h5" paragraph>{title}</Typography>
                        <Typography variant="subtitle1" paragraph>{description}</Typography>                       
                        <Hidden mdUp>
                            <TagsContainer tags={tags}/>
                </Hidden>
                    </CardContent>
                    <Hidden xsDown>
                    <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
                    </Hidden>
               
        </Card>
            </div>
            <CardActions>
                <div className={styles.links}>
                {links.map((linkItem) => (
                    <IconButton href={linkItem.href} key={linkItem.href}>
                        <linkItem.icon className={styles.icon}/>
                    </IconButton>  
                ))}
                </div>
                <Hidden smDown>
                    <TagsContainer tags={tags}/>
                </Hidden>  
            </CardActions>    
        </Grid>
    )
}
    






export default function Projects() {
    if (typeof window !== "undefined") {
        const styles = useStyles()
        return (
            <Container maxWidth="md" id="projects">
                <Box pt={8} mb={2}>
                    <Typography className={styles.mainTitle} variant="h4">Projects</Typography>
                </Box>
           
                <Grid container direction='column' spacing={4}>
                    {projectsData.map((data) => (
                        <Project {...data} />
                    ))}
                </Grid>
            </Container>

        )
    }
}


const projectsData = [
    {
        title: "Big Lebowski Quote Generator",
        description: "Random quotes from the movie 'The Big Lebowski'.",
        imageUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/06/the-big-lebowski-the-stranger-real-imaginary-narrator.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
        imageAlt: "Project 1 Image.",
        tags: ["Node.js", "MongoDB", "Rest API"],
        links: [
            {
                icon: GitHubIcon,
                href: "https://github.com/Fluva74/api_project",
            },
            { 
                icon: OpenInNewIcon,
                href: "https://www.google.com",
            },
        ],
    },
    {
        title: "dinner?",
        description: "A recipe app with search option.",
        imageUrl: "https://images.unsplash.com/photo-1576866206061-0ea8ec25fbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJ1ZmZldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        imageAlt: "Project 2 Image.",
        tags: ["React.js", "Rest API", "Node.js"],
        links: [
            {
                icon: GitHubIcon,
                href: "https://github.com/Fluva74/recipe-app",
            },
            { 
                icon: OpenInNewIcon,
                href: "https://www.google.com",
            },
        ],
    },
    {
        title: "Personal Blog",
        description: "A Blog Created With MERN Stack.",
        imageUrl: "https://www.telekom.com/resource/image/530616/landscape_ratio2x1/3000/1500/c3e6730fcd3f9223420a2ab53db0ede4/po/bi-blogschmuckbild-en.jpg",
        imageAlt: "Project 3 Image.",
        tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
        links: [
            {
                icon: GitHubIcon,
                href: "https://github.com/Fluva74/mernblog",
            },
            { 
                icon: OpenInNewIcon,
                href: "https://www.google.com",
            },
        ],
    },
]
