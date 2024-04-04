import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Index = () => {
    return (
        <Drawer
            sx={{
                width: 160,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 160,
                    boxSizing: 'border-box',
                    backgroundColor: '#1976d2',
                    color: '#fff',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem key={"dashboard"} disablePadding>
                    <ListItemButton component={Link} to={`/dashboard`}>
                        <ListItemIcon ><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"Dashboard"} primaryTypographyProps={{ color: 'inherit' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={"History"} disablePadding>
                    <ListItemButton component={Link} to={`/history`}>
                        <ListItemIcon ><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"History"} primaryTypographyProps={{ color: 'inherit' }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Index;
