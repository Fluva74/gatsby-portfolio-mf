import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link'


const socialItems = [
    { icon: GitHubIcon, url: "https://github.com/Fluva74" },
    { icon: TwitterIcon, url: "https://twitter.com/MikeFin54739502" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/mike-finnegan-596a96225/"}
]


export default function Social({ direction }) {
    if (typeof window !== "undefined") {
        return (
            <Grid container direction={direction || "row"} spacing={1}>
                {socialItems.map((item) => (
                    <Grid item>
                        <Link href={item.url}>
                            <IconButton>
                                <item.icon />
                            </IconButton>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        )
    }
}
