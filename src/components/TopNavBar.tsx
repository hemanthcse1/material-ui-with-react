import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import UserMenu from '../components/UserMenu'
import { useState } from "react";
import CreateIssueDialog from "./CreateIssueDialog";

const AppNavBar = () => {

    const [openCreate, setOpenCreate] = useState(false);

    const handleOnCreate = () => {
        console.log('Create button clicked!');
        setOpenCreate(true);
    };

    return (
        <>
       
        <AppBar position='static' color='primary' elevation={2}>
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1, fontWeight: 'bold'}}>
                    Nestly Board
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Button 
                        variant='contained'
                        color='secondary'
                        onClick={handleOnCreate}
                        sx={{textTransform: 'none', fontWeight: 'bold'}}>
                        Create
                    </Button>
                    <Button color='inherit'>Boards</Button>
                    <Button color='inherit'>Projects</Button>
                </Box>

                <UserMenu/>
            </Toolbar>
        </AppBar>

            <CreateIssueDialog open={openCreate} onClose={() => setOpenCreate(false)}></CreateIssueDialog>
         </>
    )
};

export default AppNavBar;