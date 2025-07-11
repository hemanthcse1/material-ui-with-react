import { Accessibility, Logout, Settings } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const UserMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
    }

    return(
        <>
            <IconButton onClick={handleClick} sx={{color: 'white'}}>
                <AccountCircle fontSize='large'/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{vertical:'bottom', horizontal:'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize='small'/>
                    </ListItemIcon>
                    Profile
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize='small'/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;