import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Grid } from '@mui/material';
import { fetchActiveProjects, Project } from "../api/createIssueApi";
import { wait } from "@testing-library/user-event/dist/utils";


const issueTypes = ['Bug', 'Task', 'Technical Task', 'Story'];
const priorities = ['Low', 'Medium', 'High'];

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateIssueDialog = ({open, onClose}: Props) => {

    const [projectOptions, setProjectOptions] = useState<Project[]>([]);
    const [selectedProjectName, setSelectedProjectName] = useState<string>('');

    const [issueType, setIssueType] = useState('');
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        const getProjects = async () =>{
            try{
                const data = await fetchActiveProjects();
                setProjectOptions(data)
            }catch(error){
                console.log('failed to fetch projects',error)
            }
        }
        getProjects()
    }, [])

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

                    <Typography variant='h6' fontWeight='bold' width='200px' textAlign='right'>
                        Project<Typography component='span' color='error'>*</Typography>
                    </Typography>
                    <TextField 
                        select
                        label='Project'
                        value={selectedProjectName}
                        onChange={(e) => setSelectedProjectName(e.target.value)}
                        sx={{width: '300px'}}>
                            {projectOptions.map((proj) => (
                            <MenuItem key={proj.name} value={proj.name}>
                            {proj.name}
                             </MenuItem>
                            ))}
                    </TextField>
                </Box>

                <Box display='flex' alignItems='center' gap={2} mb={2}>
                    <Typography variant='h6' fontWeight='bold' width='200px' textAlign='right'>
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