import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
import logo from '../theme/imgs/Avatar_sm.png'

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Avatar
                    src={logo}
                    alt="Bare Necessities"
                />
                <Typography variant="h6">
                    Bare Necessities
                </Typography>
            </Toolbar>
        </AppBar>
    )
}