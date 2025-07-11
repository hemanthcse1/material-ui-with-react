import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { Grid } from '@mui/material';


const projectOptions = ['Nestly-backend','Nestly-frontend', 'Figma-design'];
const issueTypes = ['Bug', 'Task', 'Technical Task', 'Story'];
const priorities = ['Low', 'Medium', 'High'];

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateIssueDialog = ({open, onClose}: Props) => {

    const [project, setProject] = useState('');
    const [issueType, setIssueType] = useState('');

    const handleSubmit = () => {


    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth='md'>
            <Box sx={{px: 3, pt: 2, pb: 1}}>
                <Typography variant='h6' fontWeight='bold'>
                    Create issue
                </Typography>
            </Box>
            <DialogContent dividers sx={{pt: 1}}>
                <Typography variant='body2' color='text.secondary' mb={2} >
                    Required fields are marked with an asterisk <Typography component='span' color='error'>*</Typography>
                </Typography>

                <Box display='flex' alignItems='center' gap={2} mb={2}>

                    <Typography variant='h6' fontWeight='bold'>
                        Project<Typography component='span' color='error'>*</Typography>
                    </Typography>
                    <TextField 
                        select
                        label='Project'
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        sx={{width: '300px'}}>
                            {projectOptions.map((proj) => (
                                <MenuItem key={proj} value={proj}>{proj}</MenuItem>
                            ))}
                    </TextField>
                </Box>

                <Box display='flex' alignItems='center' gap={2} mb={2}>
                    <Typography variant='h6' fontWeight='bold'>
                        Issue Type<Typography component='span' color='error'>*</Typography>
                    </Typography>
                    <TextField
                        select
                        label='Issue Type'
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        sx={{width: '300px'}}>
                            {
                                issueTypes.map((type) => (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))
                            }
                    </TextField>
                </Box>

            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant='contained' onSubmit={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    )

};

export default CreateIssueDialog;